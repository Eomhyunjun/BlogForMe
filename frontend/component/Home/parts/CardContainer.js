import { css } from "@emotion/css";
import Card from "./Card";

function CardContainer() {
  const src =
    "https://www.notion.so/image/https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbbc1daf9-446c-4a69-8cae-c05405b9c490%2FlogoImg.svg%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20220623%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20220623T170151Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3D43c7006c9de1fb3ba2559632b5bf018d59756e2bd98ca052a66928bf646a744f%26X-Amz-SignedHeaders%3Dhost%26response-content-disposition%3Dfilename%2520%253D%2522logoImg.svg%2522%26x-id%3DGetObject?table=block&id=1c756795-ed6f-4314-91b6-e64b8076f004&spaceId=39262b28-deb0-4e99-938a-d51f7073ff6f&userId=76a84c7e-c275-4b8f-a744-a3bd7000333c&cache=v2";
  const src2 =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c63ca11-d2c0-4b07-b437-2df97a7eed48/%EC%A0%9C%EB%AA%A9_%EC%97%86%EB%8A%94_%EC%95%84%ED%8A%B8%EC%9B%8C%ED%81%AC_10.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T202258Z&X-Amz-Expires=86400&X-Amz-Signature=28bdeca765b2d24003227f2de8da4f06306e2d7ce48bad4ae90a635e97e1ff67&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25A0%259C%25EB%25AA%25A9_%25EC%2597%2586%25EB%258A%2594_%25EC%2595%2584%25ED%258A%25B8%25EC%259B%258C%25ED%2581%25AC%252010.png%22&x-id=GetObject";
  const src3 = "https://news.kbs.co.kr/data/fckeditor/new/image/2021/02/02/327881612246405061.png";

  return (
    <div className={CardBox}>
      2021
      <Card
        src={src}
        title="ONIT"
        state="ing"
        date="08.27"
        contents="신진작가를 위한 퍼스널 브랜딩 플랫폼"
      />
      <Card
        src={src2}
        title="식꾸식꾸"
        state="ing"
        date="12.30"
        contents="식물과의 소통을 위한 애완식물 프로젝트"
      />
      2022
      <Card
        src={src3}
        title="Blog For Me"
        state="ing"
        date="08.14"
        contents="내가 쓸 블로그 만들기"
      />
      <Card 
        title="IVTN"
        state="stop"
        date="-"
        contents="작가들 졸업 전시회 소개 프로젝트"/>
    </div>
  );
}

const CardBox = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  height: auto;
`;

export default CardContainer;
