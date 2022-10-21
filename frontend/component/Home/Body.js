import { css } from "@emotion/css";
import Comments from "./parts/Comments";
import CardContainer from "./parts/CardContainer";
import Profile from "./parts/Profile";

function Body() {
  return (
    <div className={wrapper}>
      <div>
      <Profile />
      </div>
      <div className={leftSpace}>
        {/* <CardContainer /> */}
        <div className={marginBottom}/>
        {/* <Comments /> */}
      </div>
    </div>
  );
}

const wrapper = css`
  display: flex;
  gap: 15px;
  padding: 15px;
  width: 100%;
`;

const leftSpace = css`
  flex: 1;
`;

const marginBottom = css`
  margin-bottom: 15px;
`;

export default Body;
