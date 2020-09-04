import React from "react";
import { styled } from "baseui";


import { Grid, Row, Col as Column } from "../../components/FlexBox/FlexBox";
import SimpleCard from "../../components/Widgets/SimpleCard/SimpleCard";
import StickerCard from "../../components/Widgets/StickerCard/StickerCard";
import {
  CoinIcon,
  CartIconBig,
  UserIcon,
  DeliveryIcon,
} from "../../components/AllSvgIcon";

const Col = styled(Column, (props) => ({
  "@media only screen and (max-width: 574px)": {
    marginBottom: "30px",

    ":last-child": {
      marginBottom: 0,
    },
  },

  "@media only screen and (max-width: 990px)": {
    marginBottom: props.className === "mb-30" ? "30px" : "0",
  },
}));


const cards = [
  {
    text: "Website",
    image: `url(https://i.pinimg.com/originals/3a/6c/88/3a6c88c71dc3991c79ffb34ed3855758.png),  linear-gradient(to right, rgba(113,113,230,.7), rgba(113,113,230,.7))`
  },
  {
    text: "OTA Rank",
    image: `url(https://pngimg.com/uploads/motorcycle/motorcycle_PNG5341.png),  linear-gradient(to right, rgba(113,113,230,.7), rgba(113,113,230,.7))`
  },
  {
    text: "Sales",
    image: `url(https://i.pinimg.com/originals/24/7c/ef/247cef7737160db9e010a788a8c64db1.png),  linear-gradient(to right, rgba(113,113,230,.7), rgba(113,113,230,.7))`
  },
];
const plans = [
  {
    logo: "https://www.logolynx.com/images/logolynx/5a/5a00a038e7b8c6c63a3baa64aea86b1b.png",
    title: "EXPERT PLAN ONLY",
    company: "Booking",
    note: "Enable Bookin.com channel optimization by our expertor team.",
    link: "",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Expedia_2012_logo.svg",
    title: "EXPERT PLAN ONLY",
    company: "Expedia",
    note: "Enable Bookin.com channel optimization by our expertor team.",
    link: "",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    title: "EXPERT PLAN ONLY",
    company: "Airbnb",
    note: "Enable Bookin.com channel optimization by our expertor team.",
    link: "",
  },
  {
    logo: "https://www.logolynx.com/images/logolynx/5a/5a00a038e7b8c6c63a3baa64aea86b1b.png",
    title: "EXPERT PLAN ONLY",
    company: "Booking",
    note: "Enable Bookin.com channel optimization by our expertor team.",
    link: "#",
  },
];

const Overview = () => (
  <Grid fluid={true}>
    <b>Default</b>
    <br />
    <br />
    <Row>
      {cards
        ? cards.map((c, i) => (
          <Col key={i} lg={4} sm={6} xs={12} className="mb-30">
            <SimpleCard title={c.text} image={c.image} icon={<CoinIcon />} />
          </Col>
        ))
        : null}
    </Row>

    <Row>
      {
        plans.map(({ logo, title, company, note, link }, i) => {
          console.log('i :>> ', i);
          return (
            <Col
              key={i}
              lg={4}
              sm={6}
              xs={12}
              className="mb-30"
              style={{ marginBottom: "15px" }}
            >
              <StickerCard
                num={i}
                logo={logo}
                title={title}
                subtitle=""
                price={company}
                note={note}
                link={link}
              />
            </Col>
          )
        })}
    </Row>
  </Grid>
);

export default Overview;