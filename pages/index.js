import styled from 'styled-components'
import gql from 'graphql-tag'

import { withApollo } from '../lib/apollo'
import Layout from '../components/Layout'
import { useQuery } from '@apollo/react-hooks'

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`

const Hero = styled.div`
  width: 100%;
  color: #333;

  .title {
    margin: 0;
    width: 100%;
    padding-top: 80px;
    line-height: 1.15;
    font-size: 48px;
  }
  .title,
  .description {
    text-align: center;
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)
  if (loading || error) return <div></div>
  return (
    <Layout>
      <Hero>
        <h1 className="title">{data.sayHello}</h1>
      </Hero>
    </Layout>
  )
}

export default withApollo(Home)
