import { css } from "@emotion/css";

function Comments() {
  return <div className={commentsFrame}>뒤지버지는 댓글창</div>;
}

const commentsFrame = css`
  border: 1px solid black;
`;

export default Comments;
