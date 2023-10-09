import { AlphaColorOpacityStyle, greenScaleTheme, orangeScaleTheme, redScaleTheme, violetScaleTheme } from "./RootColorStyle";

export const FillColor = {
    primaryFill: AlphaColorOpacityStyle.Neutral.Opacity130,
    secondaryFill: AlphaColorOpacityStyle.Neutral.Opacity90,
    teriaryFill: AlphaColorOpacityStyle.Neutral.Opacity70,
    disabledFill: AlphaColorOpacityStyle.Neutral.Opacity60,
    accentFill: violetScaleTheme.violetScaleColor90,
    successFill: greenScaleTheme.greenScaleColor90,
    errorFill: redScaleTheme.redScaleColor90,
    warningFill: orangeScaleTheme.orangeScaleColor90,
    invertedFill: AlphaColorOpacityStyle.White.Opacity130
}

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
    invertedText: AlphaColorOpacityStyle.White.Opacity130
}