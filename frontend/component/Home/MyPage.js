import { css } from "@emotion/css";
import Comments from "./parts/Comments/Comments";
import CardContainer from "./parts/CardContainer";
import Profile from "./parts/Profile";

function MyPage() {
  return (
      <div className={wrapper}>
        <section className={leftSection}>
          <Profile />
        </section>
        <section className={rightSection}>
          {/* <CardContainer /> */}
          <div className={cal}/>
          <div className={marginBottom} />
          <Comments />
        </section>
      </div>
  );
}

const wrapper = css`
  display: flex;
  // gap: 15px;
  padding: 15px;
  width: 100%;
`;

const rightSection = css`
  flex: 1;
  margin-left: 15px;
`;

const cal = css`
  width: 100%;
  height: 500px;
  border: 1px solid #dae1e6;
`;

const marginBottom = css`
  margin-bottom: 15px;
`;

const leftSection = css`
  display: flex;
`;

export default MyPage;
