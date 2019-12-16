import Head from 'next/head'
import Navigation from './Navigation'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Claire and Andy</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
