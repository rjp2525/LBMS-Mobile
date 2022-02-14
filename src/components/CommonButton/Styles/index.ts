import EStyleSheet from "react-native-extended-stylesheet";
import { Colors, Fonts } from "../../../theme";

export default EStyleSheet.create({
  commonButton: {
    backgroundColor: Colors.green,
    borderWidth: "2rem",
    borderColor: Colors.green,
    borderRadius: "12rem",
    paddingVertical: "10rem",
    paddingHorizontal: "12rem",
  },
  commonButtonText: {
    color: Colors.white,
    fontSize: "12rem",
    lineHeight: "20rem",
    textAlign: "center",
    textTransform: "uppercase",
    ...Fonts.style.placeHolderText,
  },
});
