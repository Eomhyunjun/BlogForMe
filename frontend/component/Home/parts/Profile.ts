import { css } from "@emotion/css";
import githubLogo from "asset/logo/githubLogo.png";
import Image from "next/image";
import myProfileImg from "asset/img/anigif2.gif";

function Profile() {
  return (
    <div className={profileContainer}>
      <section className={myProfile}>
        <div className={profileImgStyle}>
          <Image
            className={profileImgStyle}
            alt="프로필 사진"
            width={70}
            height={70}
            placeholder='프로필 사진'
            src={myProfileImg}
          />
        </div>
        <div className={profileInfoStyle}>
          <p className={userNameFont}>엄현준</p>
          <div className={logoContainer}>
            <a href="https://github.com/Eomhyunjun" className={logoColor}>
              <Image
                src={githubLogo}
                alt="GitHub Logo"
                placeholder="github"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div>
            {/* <span>팔로우</span>
          <span>팔로잉</span> */}
          </div>
        </div>
      </section>
      <section className={userIntroduce}>
        <p className={userDesc}>안녕하세요. 엄현준입니다</p>
      </section>
    </div>
  );
}

const profileContainer = css`
  width: 240px;
  height: fit-content;
  padding: 30px 20px;
  border: 1px solid #dae1e6;
`;

const myProfile = css`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid #dae1e6;
`;

const profileImgStyle = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const profileInfoStyle = css`
  margin: 10px;
`;

const userNameFont = css`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 6px;
`;

const logoContainer = css`
  margin-top: 14px;
`;

const userDesc = css`
  font-size: 14px;
`;

const logoColor = css`
  background-color: transparent;
  filter: opacity(0.3) drop-shadow(0 0 0 #b8bdc3);
`;

const userIntroduce = css`
  padding-top: 30px;
`;
export default Profile;
