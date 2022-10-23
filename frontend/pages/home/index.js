import Head from 'next/head'
import GlobalHeader from 'component/GlobalHeader/GlobalHeader'
import Body from 'component/Home/MyPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heom 블로그</title>
      </Head>
      홈입니다.
    </div>
  )
}
