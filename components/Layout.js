import Head from 'next/head'
import Navigation from './Navigation'
import '../styles/_app-base.scss'

const Layout = ({ navTitle, children }) => {
  return (
    <div>
      <Head>
        <title>Claire and Andy Wedding</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navigation navTitle={navTitle} />
      {children}
    </div>
  )
}

export default Layout
