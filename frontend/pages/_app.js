import GlobalHeader from "component/GlobalHeader/GlobalHeader";
import PageWrapper from "component/Wrapper/PageWrapper";
import { useRouter } from "next/router";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <PageWrapper>
      {router.pathname !== '/login' && <GlobalHeader />}
      <Component {...pageProps} />{" "}
      </PageWrapper>
    </>
  );
}

export default MyApp;
