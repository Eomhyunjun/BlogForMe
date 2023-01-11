import { css } from "@emotion/css";
import Comments from "./parts/Comments/Comments";
import Profile from "./parts/Profile";
import { useMemo } from "react";
import ArticleList from "./ArticleList";

function MyPage() {
  const contentsList = [
    {
      listTitle: "C언어 튜텨링",
      contents: [
        {
          title: "C언어 튜텨링 4회차",
          link: "https://nforu.notion.site/C-C-C-4-1d5ef83231594666b4a02d5c1c91ee87",
        },
        {
          title: "C언어 튜텨링 3회차",
          link: "https://nforu.notion.site/C-C-C-3-160b7f00f7dd4be0be382e2c2add246c",
        },
        {
          title: "C언어 튜텨링 2회차",
          link: "https://nforu.notion.site/C-C-C-2-c109712daaf34c078e7e3d839ee993f8",
        },
        {
          title: "C언어 튜텨링 1회차",
          link: "https://nforu.notion.site/C-C-C-1-a5fadcd7f8ab4df28fd98e65f90fd1a3",
        },
      ],
    },
    {
      listTitle: "알고리즘",
      contents: [],
    },
    {
      listTitle: "논리회로",
      contents: [{
        title: "동기식 순차논리",
        link: 'https://nforu.notion.site/10-1-5bd11a454a5d41cf97a25dffd5608be6',
      },],
    }
  ];
  return (
    <div className={wrapper}>
      <section className={leftSection}>
        <Profile />
      </section>
      <section className={rightSection}>
        {/* <CardContainer /> */}
        <div className={flex}>
          <ArticleList
            title={contentsList[0].listTitle}
            contents={contentsList[0].contents}
          />
          <ArticleList title={"알고리즘"} contents={contentsList[1].contents} />
        </div>
        <div className={flex}>
        <ArticleList title={contentsList[2].listTitle} contents={contentsList[2].contents} />
        </div>
        <div className={marginBottom} />
        <Comments />
      </section>
    </div>
  );
}

const flex = css`
  display: flex;
`;

const wrapper = css`
  display: flex;
  width: 870px;
  // gap: 15px;
  padding: 15px;
  width: 100%;
`;

const rightSection = css`
  flex: 1;
  margin-left: 15px;
  margin-right: 70px;
`;

const marginBottom = css`
  margin-bottom: 15px;
`;

const leftSection = css`
  display: flex;
`;

export default MyPage;
