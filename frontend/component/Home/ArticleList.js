import { css } from "@emotion/css";
import { useMemo } from "react";

function ArticleList({ title, contents }) {

  const contentsTitleJSX = useMemo(
    () =>
    contents.map(({ title, link }) => (
        <a key="title" className={contentsTitle} href={link}>
          {title}
        </a>
      )),
    []
  );

  return (
    <div className={container}>
      <div className={contentsSection}>
        <h3 className={contentsListTitle}>{title}</h3>
        <div className={contentsTitleBox}>{contentsTitleJSX}</div>
      </div>
    </div>
  );
}

const container = css`
  padding: 10px;
  margin-bottom: 100px;
  flex-grow: 1;
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

export default ArticleList;
