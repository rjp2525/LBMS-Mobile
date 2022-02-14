import EStyleSheet from "react-native-extended-stylesheet";
import { Colors, Fonts } from "../../../theme";
import { isIphoneX } from "../../../libs/Utils";

const styles = EStyleSheet.create({
  container: {
    minHeight: "100%",
    height: "auto",
    paddingTop: isIphoneX() ? "120rem" : "70rem",
    paddingBottom: "15rem",
  },

  accountShapContent: {
    position: "absolute",
    width: "100%",
  },

  accountShapImgOne: {
    width: "115.5rem",
    height: "142rem",
    position: "absolute",
    top: isIphoneX() ? "-44rem" : "-40rem",
    right: "114rem",
  },

  accountShapImgTwo: {
    width: "96.5rem",
    height: "127rem",
    position: "absolute",
    top: isIphoneX() ? "62rem" : "22rem",
    right: 0,
  },

  accountShapImgThree: {
    width: "173rem",
    height: "76rem",
    position: "absolute",
    top: isIphoneX() ? "274rem" : "224rem",
    left: 0,
  },

  accountShapImgFour: {
    width: "171rem",
    height: "167.5rem",
    position: "absolute",
    top: isIphoneX() ? "293rem" : "243rem",
    right: 0,
  },

  accountHeadingParagraphContent: {
    marginBottom: "173rem",
  },

  accountHeading: {
    height: "24rem",

    marginTop: "25rem",
    marginBottom: "15rem",
  },

  accountParagraph: {
    color: Colors.white,
    fontSize: "19rem",
    lineHeight: "24rem",
    ...Fonts.style.placeHolderText,
  },

  accountInputHeading: {
    marginBottom: "20rem",
    color: Colors.white,
    fontSize: "19rem",
    lineHeight: "24rem",
    ...Fonts.style.placeHolderText,
  },

  inputContentStyle: {
    marginBottom: "18rem",
  },

  accountInputBtnContent: {
    marginBottom: "15rem",
  },

  commonButtonStyle: {
    marginBottom: "12rem",
  },

  accountBottomSmallText: {
    fontSize: "15rem",
    lineHeight: "15rem",
    color: Colors.lightGray,
    textAlign: "center",
    marginTop: "auto",
    ...Fonts.style.placeHolderText,
  },

  accountBottomSmallLinkText: {
    color: Colors.green,
    fontSize: "15rem",
    lineHeight: "15rem",
    textAlign: "center",
    marginTop: "auto",
    ...Fonts.style.placeHolderText,
  },

  accountParagraphLink: {
    color: Colors.green,
  },

  forgotPswBtnText: {
    color: Colors.lightGray,
    lineHeight: "15rem",
    paddingTop: "25rem",
    fontSize: Fonts.size.tiny,
    textAlign: "center",
    ...Fonts.style.placeHolderText,
  },
});

export default styles;
