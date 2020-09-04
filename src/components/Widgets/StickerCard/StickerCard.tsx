import React from "react";
import {
  Card,
  TopInfo,
  TitleWrapper,
  Title,
  SubTitle,
  IconBox,
  Price,
  Note,
  Text,
  Link
} from "./StickerCard.style";
import { IosArrowUp, IosArrowDown } from "../../AllSvgIcon";

const StickerCard = ({
  title,
  logo,
  subtitle,
  price,
  note,
  num
}: any) => {
  return (
    <Card>
      <TopInfo>
        <TitleWrapper>
          <Title>{title}</Title>
          <SubTitle style={{ background: `url(${logo}) no-repeat ` }}>{subtitle}</SubTitle>
        </TitleWrapper>
        <div className="tg-list-item">
          <input className="tgl tgl-light" id={`${num}_cb1`} type="checkbox"></input>
          <label className="tgl-btn" htmlFor={`${num}_cb1`}></label>
        </div>
      </TopInfo>
      <Price>{price}</Price>
      <Note> {note}</Note>
    </Card>
  );
};

export default StickerCard;