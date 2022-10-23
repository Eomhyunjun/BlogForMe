import Head from 'next/head'
import MyPage from 'component/Home/MyPage';

export default function Home() {
  const notionImg =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/df7335d5-57f3-407d-bbe5-44ed398b428e/anigif2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221009T041747Z&X-Amz-Expires=86400&X-Amz-Signature=257140d665bc993ff3745317e275355a99ef8006dff1506e5a2002d0e9839113&X-Amz-SignedHeaders=host&x-id=GetObject";
  return (
    <div>
      <Head>
        <title>Heom World</title>
      </Head>
      <div>
      <MyPage />
      </div>
    </div>
  );
}