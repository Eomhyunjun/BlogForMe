import PageRouter from "component/PageRouter";
import PageWrapper from "component/Wrapper/PageWrapper";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseFuc/firebase";
import { useEffect, useState } from "react";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [init, setInit] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setIsLoggedIn(true);
    //     setUserObj(user);
    //     // const uid = user.uid;

    //   } else {
    //     setIsLoggedIn(false);
    //     // User is signed out
    //   }
    //   setInit(true);
    // });
  }, [])

  return (
    <>
      <PageWrapper>
        {init ?
          (
            <PageRouter isLoggedIn={isLoggedIn} userObj={userObj} Component={Component} pageProps={pageProps} />
          ) : (
            '로딩중입니다.'
          )
        }
      </PageWrapper>
    </>
  );
}

export default MyApp;
