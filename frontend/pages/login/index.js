import { css, keyframes } from "@emotion/css";
import { useState } from "react";

function index(props) {
  const [animationStart, setAnimationStart] = useState(false);

  function handleEmailLogin() {
    setAnimationStart(true);
  }

  function handleGoogleLogin() { }

  return (
    <>
      <section className={container(animationStart)}>
        <div>
          <h1 className={mainTitle}>HEOM WORLD</h1>
        </div>
        <div className={loginBox}>
          <div className={buttonBox}>
            <button
              type="button"
              onClick={handleEmailLogin}
              className={loginSelectButton}
            >
              이메일로 시작하기
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className={loginSelectButton}
            >
              구글 아이디로 시작하기
            </button>
          </div>
        </div>
      </section>
      {animationStart && (
        <section>
          <div className={inputWrapper}>
            <input className={inputStyle} placeholder="이메일" />
          </div>
          <div className={inputWrapper}>
            <input className={inputStyle} placeholder="비밀번호" />
          </div>
        </section>
      )}
    </>
  );
}

const emailLoginClickedAnimation = keyframes`
    0% {
    }
    100% {
        top: 50%;
        left: 10%;
        transform: translate(0%, -50%);
    }
`;

const buttonGradient = keyframes`
    0% {
    background-position: 0% 50%;
    }
    100% {
    background-position: 50% 100%;
    }
`;

const container = (isEmailLoginClicked) => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${isEmailLoginClicked &&
  `animation: ${emailLoginClickedAnimation} 2s ease 1;
    animation-fill-mode: forwards;
    `}
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
  height: 50px;
  margin-bottom: 10px;

  border: 1px solid #dae1e6;
  border-radius: 5px;
  border-collapse: collapse;
`;

const inputStyle = css`
  width: 100%;
  height: 100%;
  padding: 10px 10px 10px 10px;
`;

const buttonBox = css``;

const loginSelectButton = css`
  width: 100%;
  height: 44px;

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

  border-radius: 8px;
  margin-bottom: 10px;

  cursor: pointer;
  text-align: center;
  color: #fdfdfd;
  &:hover {
    animation: ${buttonGradient} 2s ease 1;
    animation-fill-mode: forwards;
    color: white;
  }
`;

const submitButton = css`
  width: 73px;
  height: 44px;

  background-color: #88b7c6;
  border-radius: 8px;

  text-align: center;
  color: #fdfdfd;
  &:hover {
    background-color: #88b7c6e8;
    color: white;
  }
`;

export default index;
