import EStyleSheet from "react-native-extended-stylesheet";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();

export default EStyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  statusBarBlurBg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: statusBarHeight,
    "@media android": {
      zIndex: 999999,
    },
    overflow: "hidden",
  },

  statusBarBlur: {
    width: "100%",
    height: "100%",
  },
});
