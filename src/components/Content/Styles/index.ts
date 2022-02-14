import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: "20rem",
  },

  contentContainerStyle: {
    "@media ios": {
      // minHeight: isIphoneX() ? '100% - 75rem' : '100% - 25rem'
    },
    "@media android": {
      minHeight: "100%",
    },
  },
});
