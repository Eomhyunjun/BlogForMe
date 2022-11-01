import Head from 'next/head'
import MyPage from 'component/Home/MyPage'
import MainBackground from 'component/Home/parts/MainBackground'

export default function MyHome() {
  return (
    <div>
      <Head>
        <title>Heom 블로그</title>
      </Head>
      <MainBackground />
      <MyPage />
    </div>
  )
}
