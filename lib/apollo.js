import ApolloClient from 'apollo-client'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'isomorphic-unfetch'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

let apolloClient = null

export function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  WithApollo.getInitialProps = async ctx => {
    const { AppTree } = ctx

    // Initialize ApolloClient, add it to the ctx object so
    // we can use it in `PageComponent.getInitialProp`.
    const apolloClient = (ctx.apolloClient = initApolloClient())

    // Run wrapped getInitialProps methods
    let pageProps = {}
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx)
    }

    // If we're on the server...
    if (typeof window === 'undefined') {
      // When redirecting, the response is finished.
      // No point in continuing to render
      if (ctx.res && ctx.res.finished) {
        return pageProps
      }

      try {
        // Run all GraphQL queries
        const { getDataFromTree } = await import('@apollo/react-ssr')
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient
            }}
          />
        )
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        console.error(error)
      }

      // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind()
    }

    // Extract query data from the Apollo store
    const apolloState = apolloClient.cache.extract()
    return {
      ...pageProps,
      apolloState
    }
  }

  return WithApollo
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
const initApolloClient = initialState => {
  if (typeof window === 'undefined') {
    return createApolloClient(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState)
  }

  return apolloClient
}

const isDev = process.env.NODE_ENV !== 'production'
const uri = isDev ? 'http://localhost:3000' : 'https://wedding-website.andrewcousineau.now.sh'

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
const createApolloClient = (initialState = {}) => {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: `${uri}/api/graphql`, // Server URL (must be absolute),
      credentials: 'same-origin',
      fetch
    }),
    cache: new InMemoryCache().restore(initialState)
  })
}
