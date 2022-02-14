import FontHelper from "../helpers/FontHelper";
import { Platform } from "react-native";

const size = {
  h1: "32rem",
  h2: "24rem",
  h3: "18rem",
  h4: "18rem",
  regular: "16rem",
  medium: "14rem",
  small: "13rem",
  tiny: "12rem",
};

const style = {
  headerWhite: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: Platform.OS === "ios" ? "600" : "500",
    }),
    fontSize: size.regular,
    // color: Colors.white
  },
  placeHolderText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: Platform.OS === "ios" ? "500" : "400",
    }),
    // fontSize: size.regular,
    // color: Colors.lightGray
  },
  textInputText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: Platform.OS === "ios" ? "500" : "400",
    }),
    fontSize: size.regular,
    // color: Colors.black
  },
  buttonText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: Platform.OS === "ios" ? "700" : "600",
    }),
    // fontSize: size.regular
    // color: Colors.white
  },
  lightText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: "300",
    }),
  },
  normalText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: "400",
    }),
  },
  boldText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: Platform.OS === "ios" ? "700" : "500",
    }),
  },
  blackText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: "600",
    }),
  },
  extraBoldText: {
    ...FontHelper.font({
      fontFamily: "Lexend",
      fontWeight: "700",
    }),
  },
};

export default {
  size,
  style,
};
