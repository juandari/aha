import type { NextPage } from 'next'
import Head from 'next/head'
import Resultpage from '@pages/Result'

const Result: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Result</title>
        <meta name="search result page" content="Result page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Resultpage />
    </div>
  )
}

export default Result
