import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.GRAPHQL_URI,
  cache: new InMemoryCache(),
})

export default client
