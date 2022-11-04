import { css } from "@emotion/css";
import Comments from "./parts/Comments/Comments";
import CardContainer from "./parts/CardContainer";
import Profile from "./parts/Profile";
import { useMemo } from "react";

function MyPage() {
  const contentsList = [
    {
      title: "C언어 튜텨링 3회차",
      link: "https://heom.notion.site/C-C-C-3-160b7f00f7dd4be0be382e2c2add246c",
    },
    {
      title: "C언어 튜텨링 2회차",
      link: "https://heom.notion.site/C-C-C-2-c109712daaf34c078e7e3d839ee993f8",
    },
    {
      title: "C언어 튜텨링 1회차",
      link: "https://heom.notion.site/C-C-C-1-a5fadcd7f8ab4df28fd98e65f90fd1a3",
    },
  ];
  const contentsTitleJSX = useMemo(
    () =>
      contentsList.map(({ title, link }) => (
        <a className={contentsTitle} href={link}>
          {title}
        </a>
      )),
    []
  );

  return (
    <div className={wrapper}>
      <section className={leftSection}>
        <Profile />
      </section>
      <section className={rightSection}>
        {/* <CardContainer /> */}
        <div className={cal}>
          <div className={contentsSection}>
            <h3 className={contentsListTitle}>C언어 튜텨링</h3>
            <div className={contentsTitleBox}>{contentsTitleJSX}</div>
          </div>
        </div>
        <div className={marginBottom} />
        <Comments />
      </section>
    </div>
  );
}

const wrapper = css`
  display: flex;
  width: 870px;
  // gap: 15px;
  padding: 15px;
  width: 100%;
`;

const contentsSection = css`
  width: 100%;
`;

const contentsListTitle = css`
  height: 25px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  padding: 0 0 4px 12px;
  border-bottom: 2.5px solid rgba(0, 0, 0, 1);
`;

const contentsTitleBox = css`
  display: flex;
  flex-direction: column;
  justify-contents: column;
  padding-top: 5px;
`;

const contentsTitle = css`
  color: #3e464a;
  line-height: 1.6;
  padding: 8px 16px 8px 14px;
  font-size: 13px;
  &: hover {

  }
  border-bottom: 1px solid #e9e9e9;
`;

const rightSection = css`
  flex: 1;
  margin-left: 15px;
  margin-right: 70px;
`;

const cal = css`
  height: 500px;
  padding: 10px;
`;

const marginBottom = css`
  margin-bottom: 15px;
`;

const leftSection = css`
  display: flex;
`;

export default MyPage;
