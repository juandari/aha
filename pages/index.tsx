import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '@pages/Home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="home page" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </div>
  )
}

export default Home
