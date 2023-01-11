import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function PageRouter({ Component, pageProps, isLoggedIn, userObj }) {
    const router = useRouter();
    useEffect(() => {
        if (!isLoggedIn)
            console.log(hi);
        // router.push('/login')
        console.log(bye);
    }, [isLoggedIn])


    return (
        <>
            {router.pathname !== '/login' && <GlobalHeader />}
            <Component {...pageProps} userObj={userObj} />
        </>
    );
}

export default PageRouter;