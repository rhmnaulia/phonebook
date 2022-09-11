import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/Global.styled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
