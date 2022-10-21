import { cx, css } from "@emotion/css";
import Image from "next/image";
import { useState } from "react";
import { fontAlignWithSize } from "styles/common";

export function StateBox({ state }) {
  return (
    <>
      {state === "ing" && (
        <p className={cx(stateFontStyle, onGoingColor)}>진행 중</p>
      )}
      {state === "end" && <p className={cx(stateFontStyle, endColor)}>완료</p>}
      {state === "stop" && (
        <p className={cx(stateFontStyle, stopColor)}>예정</p>
      )}
      {!state && <></>}
    </>
  );
}

const stateFontStyle = css`
  color: black;
  width: fit-content;
  font-weight: bold;
  padding: 2px;
  ${fontAlignWithSize("15px")};
  margin-bottom: 5px;
`;

const onGoingColor = css`
  color: #85a4e7;
`;

const endColor = css`
  color: #d64d4d;
`;

const stopColor = css`
  color: #e169e6;
`;

function Card({ src, title, state, date, contents }) {
  const [isRollOut, setIsRollOut] = useState(false);

  return (
    <div className={cardFrame}>
      <div className={cx(floatLeft, cardProfile)}>
        <div className={cx(floatLeft, cardImg)}>
          <img className={objectFit} src={src} />
        </div>
        <div className={cx(floatLeft)}>
          <h3>{title}</h3>
          <p className={dateStyle}>{date}</p>
        </div>
      </div>
      <div className={cx(floatLeft, cardContents)}>
        <StateBox state={state} />
        <p className={contentsStyle}>{contents}</p>
      </div>
      {isRollOut && <div>디테일 페이지 입니다.</div>}
    </div>
  );
}

const cardFrame = css`
  display: flex;
  height: fit-content;
  padding: 10px 9px;
  border-radius: 10px;
  border: 1px solid black;
  overflow: hidden;
  &:hover {
    transform: translate(0px, -10px);
    transition: 0.2s ease-in-out;
    box-shadow: 0px 5px 15px 3px gray;
  }
`;

const cardProfile = css`
  margin-right: 10px;
`;

const cardImg = css`
  height: 40px;
  margin-right: 10px;
`;

const objectFit = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const floatLeft = css`
  float: left;
`;

const dateStyle = css`
  font-size: 0.8rem;
`;

const cardContents = css`
  flex: 1;
  text-align: start;
`;

const contentsStyle = css`
  margin-bottom: 5px;
  word-break: break-all;
  white-space: pre-line;
`;

export default Card;
