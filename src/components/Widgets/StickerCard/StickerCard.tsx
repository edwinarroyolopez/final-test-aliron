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
  subtitle,
  icon,
  price,
  indicator,
  indicatorText,
  note,
  link,
  linkText
}: any) => {
  return (
    <Card>
      <TopInfo>
        <TitleWrapper>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </TitleWrapper>

        <IconBox>{icon}</IconBox>
      </TopInfo>

      <Price>{price}</Price>

      <Note> {note}</Note>

      {/* {link !== "" && (
        <Link href={link} target="_blank">
          {linkText}
        </Link>
      )} */}
    </Card>
  );
};

export default StickerCard;
