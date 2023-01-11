import { css } from "@emotion/css";
import { useState } from "react";
import Card from "./Card";
import { dummyArr } from "./Dummy";

function CardContainer() {
  const [cardsList, setCardsList] = useState(<></>);
  const cardDataArr = dummyArr;

  useState(() => {
    const newCardsList = cardDataArr.map((data) => {
      return (
        <Card
          key={data.key}
          src={data.src}
          title={data.title}
          state={data.state}
          date={data.date}
          contents={data.contents}
        />
      );
    });
    setCardsList(newCardsList);
  }, [cardDataArr]);

  return (
    <div className={CardBox}>
      {cardsList}
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
