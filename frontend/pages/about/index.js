import Head from 'next/head'
import MyPage from 'component/Home/MyPage'

export default function About() {
  return (
    <div>
      <Head>
        <title>Heom 블로그</title>
      </Head>
      <MyPage />
    </div>
  )
}
