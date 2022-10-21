import { css, cx } from "@emotion/css";
import { useEffect, useState } from "react";
import { HEADER_HEIGHT, HEADER_ZINDEX } from "styles/styleValue";

function HeaderWrapper({ children }) {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setLeft(left - window.scrollX);
  };

  return (
    <div
      className={cx(
        css`
          left: ${left}px;
        `,
        wrapperCss
      )}
    >
      {children}
    </div>
  );
}

const wrapperCss = css`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${HEADER_ZINDEX};
  background-color: white;
  min-width: calc(900px - 2%);
  box-sizing: border-box;
  width: 100%;
  height: ${HEADER_HEIGHT};
  flex-direction: row;
  padding: 0 4%;
  border-bottom: 1px solid rgba(2, 32, 71, 0.05);
`;

export default HeaderWrapper;
