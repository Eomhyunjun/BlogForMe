import GlobalHeader from "component/GlobalHeader/GlobalHeader";
import PageWrapper from "component/Wrapper/PageWrapper";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalHeader />
      <PageWrapper>
      <Component {...pageProps} />{" "}
      </PageWrapper>
    </>
  );
}

export default MyApp;
