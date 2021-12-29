import type { NextPage } from 'next'
import Head from 'next/head'
import Tagspage from '@pages/Tags'

const Tags: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tags</title>
        <meta name="tags page" content="Tags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tagspage />
    </div>
  )
}

export default Tags
