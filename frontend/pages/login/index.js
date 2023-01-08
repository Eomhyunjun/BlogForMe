import { css, keyframes, cx } from "@emotion/css";
import { useState } from "react";
import googleLogo from "asset/logo/google500Logo.png"
import Image from "next/image";

function index(props) {
  const [animationStart, setAnimationStart] = useState(false);

  function handleEmailLogin() {
    setAnimationStart(true);
  }

  function handleGoogleLogin() { }

  return (
    <>
      <section className={container}>
        <div>
          <h1 className={mainTitle}>HEOM WORLD</h1>
        </div>
        <div className={loginBox}>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={cx(loginButton, googleLogin)}
          >
            <div className={googleLogoWrapper}>
              <Image
                src={googleLogo}
                alt="Google Logo"
                placeholder="github"
                width={20}
                height={20}
              />
              <span>Google로 계속하기</span>
            </div>
          </button>

          <div className={divtLine} />

          <label className={emailLabel} htmlFor="googleLogin">이메일</label>
          <div className={inputWrapper}>
            <input className={inputStyle} id="googleLogin" placeholder="이메일" />
          </div>
          <div className={inputWrapper}>
            <input className={inputStyle} placeholder="비밀번호" />
          </div>
          <button
            type="button"
            onClick={handleEmailLogin}
            className={cx(loginButton, emailLogin)}
          >
            이메일로 계속하기
          </button>
          <button className={joinButton}>이메일로 회원가입하기</button>
        </div>
      </section>
    </>
  );
}

const buttonGradient = keyframes`
    0% {
    background-position: 0% 50%;
    }
    100% {
    background-position: 50% 100%;
    }
`;

const container = css`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const mainTitle = css`
  margin: 108px auto 0;
  width: 100%;
  height: 40px;
  line-height: 40px;

  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

const loginBox = css`
  width: 300px;
  height: 300px;
  margin: 50px auto;
`;

const inputWrapper = css`
  width: 300px;
  height: 42px;
  margin-bottom: 10px;
`;

const inputStyle = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #dae1e6;
  padding: 10px 10px 10px 10px;
`;

const loginButton = css`
  width: 100%;
  height: 44px;
  font-size: 14px;

  border-radius: 8px;

  cursor: pointer;
  text-align: center;
`;


const googleLogin = css`
  border: 1px solid rgba(15, 15, 15, 0.15);
  &:hover {
    background-color: #f6f6f6;
  }
`;

const emailLogin = css`
  background: linear-gradient(
    -45deg,
    #abe5e6,
    #7062f0,
    #feca88,
    #ef69ad,
    #88b7c6,
    #e73c7e,
    #23a6d5,
    #23d5ab
  );
  background-size: 400%;

  color: #fdfdfd;
  &:hover {
    animation: ${buttonGradient} 2s ease 1;
    animation-fill-mode: forwards;
    color: white;
  }
`;

const googleLogoWrapper = css`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const emailLabel = css`
  display: block;
  height: 13px;
  font-size: 13px;
  color: rgba(55, 53, 47, 0.65);

  margin-bottom: 9px;
`;

const divtLine = css`
  width: 100%;
  height: 1px;
  margin: 20px 0; 
  border-bottom: solid 1px #efefef;
`;

// color: rgba(55, 53, 47, 0.65);
const joinButton = css`
  display: block;
  width: fit-content;
  margin: 20px auto 0px auto;
  text-align: center;

  font-size: 13px;
  color: rgba(55, 53, 47, 0.65); 
  &:hover {
    background: linear-gradient(-45deg, #abe5e6,#7062f0,#e73c7e);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export default index;
