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


const Overview = () => (
  <Grid fluid={true}>
    <b>Default</b>
    <br />
    <br />
    <Row>
    {cards
          ? cards.map((c) => (
            <Col lg={4} sm={6} xs={12} className="mb-30">
            <SimpleCard title={c.text} image={c.image} icon={<CoinIcon />} />
          </Col>
          ))
          : null}
    </Row>

    <Row>
      <Col
        lg={4}
        sm={6}
        xs={12}
        className="mb-30"
        style={{ marginBottom: "15px" }}
      >
        <StickerCard
          title="EXPERT PLAN ONLY"
          subtitle=""
          
          price="Booking"
          indicator="up"
          indicatorText="Revenue up"
          note="Enable Bookin.com channel optimization by our expertor team."
          link="#"
          linkText="Full Details"
        />
      </Col>
      <Col
        lg={4}
        sm={6}
        xs={12}
        className="mb-30"
        style={{ marginBottom: "15px" }}
      >
        <StickerCard
          title="Total Order"
          subtitle=""
          
          price="Expedia"
          indicator="down"
          indicatorText="Order down"
          note="Enable Bookin.com channel optimization by our expertor team."
          link="#"
          linkText="Full Details"
        />
      </Col>
      <Col lg={4} sm={6} xs={12} style={{ marginBottom: "15px" }}>
        <StickerCard
          title="New Customer"
          subtitle=""
          
          price="Airbnb"
          indicator="up"
          indicatorText="Customer up"
          note="Enable Bookin.com channel optimization by our expertor team."
          link="#"
          linkText="Full Details"
        />
      </Col>
      <Col lg={4} sm={6} xs={12} style={{ marginBottom: "15px" }}>
        <StickerCard
          title="Total Delivery"
          subtitle=""
          
          price="Booking"
          indicator="up"
          indicatorText="Delivery up"
          note="Enable Bookin.com channel optimization by our expertor team."
          link="#"
          linkText="Full Details"
        />
      </Col>
    </Row>
  </Grid>
);

export default Overview;
