import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";
import { Colors } from "../../../theme";

const styles = EStyleSheet.create({
  safeViewcontainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.black,
    "@media android": {
      marginTop: StatusBar.currentHeight,
    },
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.black,
    "@media android": {
      zIndex: 9,
    },
  },

  statusBarMarginTop: {
    marginTop: StatusBar.currentHeight,
  },
});

export default styles;
