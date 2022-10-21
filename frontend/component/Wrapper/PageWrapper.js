import { css } from "@emotion/css";
import { HEADER_HEIGHT } from "styles/styleValue";

function PageWrapper({children}) {
    return (
        <div className={marginTopHeader}>
            {children}
        </div>
    );
}

export default PageWrapper;

const marginTopHeader = css`
    margin-top: ${HEADER_HEIGHT}
`;