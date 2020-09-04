import React from "react";
import {
  Card,
  TopInfo,
  TitleWrapper,
  Title,
  IconBox,
} from "./SimpleCard.style";
import { IosArrowUp, IosArrowDown } from "../../AllSvgIcon";

const StickerCard = ({
  children,
  title,
  icon,
  image

}: any) => {
  return (
    <Card style={{backgroundImage:image, backgroundSize: "contain"}}>
      <TopInfo>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <IconBox></IconBox>
      </TopInfo>
    </Card>
  );
};

export default StickerCard;
