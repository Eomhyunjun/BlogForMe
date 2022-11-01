import { css } from "@emotion/css";
import githubLogo from "asset/logo/githubLogo.png";
import Image from "next/image";

function Profile() {
  return (
    <div className={profileContainer}>
      <section className={myProfile}>
        <img
          className={profileImgStyle}
          alt="프로필사진"
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdf7335d5-57f3-407d-bbe5-44ed398b428e%2Fanigif2.gif?table=block&id=660d3106-b35e-42ba-9532-dbe3520d0bfb&spaceId=39262b28-deb0-4e99-938a-d51f7073ff6f&userId=76a84c7e-c275-4b8f-a744-a3bd7000333c&cache=v2"
        />
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
  filter: opacity(0.3) drop-shadow(0 0 0 #b8bdc3);
`;

const userIntroduce = css`
  padding-top: 30px;
`;
export default Profile;
