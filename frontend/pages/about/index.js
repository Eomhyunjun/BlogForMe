import Head from 'next/head'
import GlobalHeader from 'component/GlobalHeader/GlobalHeader'
import Body from 'component/Home/Body'

export default function About() {
  return (
    <div>
      <Head>
        <title>Heom 블로그</title>
      </Head>
      <Body />
    </div>
  )
}
