import EStyleSheet from "react-native-extended-stylesheet";
import { Colors, Fonts } from "../../../theme";

export default EStyleSheet.create({
  inputStyle: {
    borderWidth: "2rem",
    borderColor: Colors.lighterBorderWhite,
    borderRadius: "12rem",
    paddingTop: "15rem",
    paddingBottom: "14rem",
    paddingHorizontal: "20rem",
    color: Colors.lightGray,
    backgroundColor: Colors.darkBlack,
    lineHeight: "15rem",
    height: "48rem",
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText,
  },
});
