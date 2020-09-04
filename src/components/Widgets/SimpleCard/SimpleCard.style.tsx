import { styled } from "baseui";

export const Card = styled("div", () => ({
  width: "100%",
  height: "80px",
  display: "flex",
  flexDirection: "column",
  padding: "10px 20px",
  borderRadius: "15px",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: 'saturation',
  // backgroundSize: "contain",
  color: "#FFF",
  justifyContent: 'center',


}));

export const TopInfo = styled("div", () => ({
  width: "100%",
  display: "flex",
}));

export const TitleWrapper = styled("div", () => ({
  width: "calc(100% - 60px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}));

export const Title = styled("div", ({ $theme }) => ({
  ...$theme.typography.fontBold12,
  fontFamily: $theme.typography.primaryFontFamily,
  // lineHeight: "1",
  color: "#FFF",
  marginBottom: "10px",
  fontSize: "20px"
}));

export const SubTitle = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold13,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: $theme.colors.textNormal,
  marginBottom: "0px"
}));

export const IconBox = styled("div", ({ $theme }) => ({
  width: "48px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const Price = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold21,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: $theme.colors.textDark,
  marginBottom: "10px"
}));

export const Text = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  marginBottom: "50px"
}));

export const Note = styled("span", ({ $theme }) => ({
  ...$theme.typography.font14,
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textNormal,
  lineHeight: "1.2"
}));

export const Link = styled("a", ({ $theme }) => ({
  ...$theme.typography.fontBold13,
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.purple400,
  lineHeight: "1.2",
  textDecoration: "none"
}));
