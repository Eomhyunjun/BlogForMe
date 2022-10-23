import { css } from "@emotion/css";
import Image from "next/image";

function MainBackground() {
    return (
        <div className={container}>
        </div>
    );
}

const container = css`
    width: 100vw;
    aspect-ratio: auto 1000 / 156;
    flex: 1;
    background: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcknZt8%2Fbtq7XrYostW%2FakKfA3iU1ICK59nqXqzfzK%2Fimg.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
`;

export default MainBackground;