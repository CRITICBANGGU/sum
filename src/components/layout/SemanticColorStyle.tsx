import {
  AlphaColorOpacityStyle,
  SystemColor,
  greenScaleTheme,
  orangeScaleTheme,
  redScaleTheme,
  violetScaleTheme,
} from "./RootColorStyle";

export const FillColor = {
  primaryFill: AlphaColorOpacityStyle.Neutral.Opacity130,
  secondaryFill: AlphaColorOpacityStyle.Neutral.Opacity90,
  teriaryFill: AlphaColorOpacityStyle.Neutral.Opacity70,
  disabledFill: AlphaColorOpacityStyle.Neutral.Opacity60,
  accentFill: violetScaleTheme.violetScaleColor90,
  successFill: greenScaleTheme.greenScaleColor90,
  errorFill: redScaleTheme.redScaleColor90,
  warningFill: orangeScaleTheme.orangeScaleColor90,
  invertedFill: AlphaColorOpacityStyle.White.Opacity130,
};

export const TextColor = {
  primaryText: AlphaColorOpacityStyle.Neutral.Opacity130,
  secondaryText: AlphaColorOpacityStyle.Neutral.Opacity90,
  teriaryText: AlphaColorOpacityStyle.Neutral.Opacity70,
  informationText: AlphaColorOpacityStyle.Neutral.Opacity80,
  disabledText: AlphaColorOpacityStyle.Neutral.Opacity70,
  accentText: violetScaleTheme.violetScaleColor90,
  successText: greenScaleTheme.greenScaleColor90,
  errorText: redScaleTheme.redScaleColor90,
  warningText: orangeScaleTheme.orangeScaleColor90,
  invertedText: AlphaColorOpacityStyle.White.Opacity130,
};

export const BackgroundColor = {
  bg1: AlphaColorOpacityStyle.White.Opacity130,
  bg2: AlphaColorOpacityStyle.Neutral.Opacity20,
  bg3: AlphaColorOpacityStyle.Neutral.Opacity40,
  bg4: AlphaColorOpacityStyle.Neutral.Opacity60,
  bg5: AlphaColorOpacityStyle.Neutral.Opacity80,
  bg6: AlphaColorOpacityStyle.Neutral.Opacity100,
  bg7: AlphaColorOpacityStyle.Neutral.Opacity120,
  solidBg: SystemColor.White,
  disabledBg: AlphaColorOpacityStyle.Neutral.Opacity60,
  accentBg: violetScaleTheme.violetScaleColor90,
  successBg: greenScaleTheme.greenScaleColor90,
  errorBg: redScaleTheme.redScaleColor90,
};

export const CardColor = {
  card1: AlphaColorOpacityStyle.White.Opacity130,
  card2: AlphaColorOpacityStyle.Neutral.Opacity20,
  card3: AlphaColorOpacityStyle.Neutral.Opacity40,
  card4: AlphaColorOpacityStyle.Neutral.Opacity60,
  card5: AlphaColorOpacityStyle.Neutral.Opacity80,
  card6: AlphaColorOpacityStyle.Neutral.Opacity100,
  card7: AlphaColorOpacityStyle.Neutral.Opacity120,
  disabledCard: AlphaColorOpacityStyle.Neutral.Opacity60,
  accentCard: violetScaleTheme.violetScaleColor90,
  successCard: greenScaleTheme.greenScaleColor90,
  errorCard: redScaleTheme.redScaleColor90,
};
