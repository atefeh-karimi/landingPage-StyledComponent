import React from "react";
import { CardStyled } from "./styles/Card.Styled";

function Card({ title, body, image, id }) {
  return (
    <CardStyled layout={id % 2 === 0 ? "row-reverse" : "row"}>
      <div className="cardBody">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <img src={image} alt="" />
    </CardStyled>
  );
}

export default Card;
