import { styled } from "baseui";

export const Card = styled("div", () => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  borderRadius: "6px",
  backgroundColor: "#ffffff",
}));

export const TopInfo = styled("div", () => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
}));

export const TitleWrapper = styled("div", () => ({
  width: "calc(100% - 80px)",
  display: "flex",
  flexDirection: "column",
}));

export const Title = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold16,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: "#333",
  marginBottom: "10px",
  background: "#edaf55",
  borderRadius: "15px",
  padding: "5px",
  fontSize: "10px",
  width: "110px",
  textAlign: "center",
}));

export const SubTitle = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold13,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: $theme.colors.textNormal,
  marginBottom: "0px",
  // background:
  //   "url(https://www.logolynx.com/images/logolynx/5a/5a00a038e7b8c6c63a3baa64aea86b1b.png) no-repeat",
  backgroundSize: "contain !important",
  height: "30px",
}));

export const IconBox = styled("div", ({ $theme }) => ({
  width: "48px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Price = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold21,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: $theme.colors.textDark,
  marginBottom: "10px",
}));

export const Text = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  marginBottom: "50px",
}));

export const Note = styled("span", ({ $theme }) => ({
  ...$theme.typography.font14,
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textNormal,
  lineHeight: "1.2",
}));

export const Link = styled("a", ({ $theme }) => ({
  ...$theme.typography.fontBold13,
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.purple400,
  lineHeight: "1.2",
  textDecoration: "none",
}));
export const Label = styled("label", ({ $theme }) => ({
  ...$theme.typography.fontBold13,
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.purple400,
  lineHeight: "1.2",
  textDecoration: "none",
}));


/*
.tgl {
    display: none;
}
.tgl-light + .tgl-btn {
    background: #f0f0f0;
    border-radius: 2em;
    padding: 2px;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
}
.tgl + .tgl-btn {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.tgl-light + .tgl-btn:after {
    border-radius: 50%;
    background: #fff;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}
.tgl + .tgl-btn:after {
    left: 0;
}
.tgl + .tgl-btn:after {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
}
.tgl-light:checked + .tgl-btn {
    background: #9FD6AE;
}
.tgl:checked + .tgl-btn:after {
    left: 50%;
}
.tgl + .tgl-btn {
    box-sizing: border-box;
}
*/