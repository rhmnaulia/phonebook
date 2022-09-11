import { FC } from 'react'
import Head from 'next/head'
import { LayoutContainer } from 'styles/components/Layout.styled'

type TLayoutProps = {
  children: React.ReactNode
}

const Layout: FC<TLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Head>
        <title>Phonebook</title>
      </Head>
      <main>{children}</main>
    </LayoutContainer>
  )
}

export default Layout
