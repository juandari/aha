import type { NextPage } from 'next'
import Head from 'next/head'
import Tagspage from '@pages/Tags'

const Tags: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tags</title>
        <meta name="home page" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tagspage />
    </div>
  )
}

export default Tags
