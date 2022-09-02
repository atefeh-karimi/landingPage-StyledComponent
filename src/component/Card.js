import React from "react";
import { CardStyled } from "./styles/Card.Styled";

function Card({ title, body, img, id }) {
  return (
    <CardStyled layout={id % 2 === 0 ? "row-reverse" : "row"}>
      <div className="cardBody">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <img src={img} alt="" />
    </CardStyled>
  );
}

export default Card;
