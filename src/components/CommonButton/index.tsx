import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Styles";

export interface Props {
  navigation: any;
  btnText?: any;
  CommonButtonStyle?: any;
  onCommonButtonPress?: any;
}

function CommonButton({
  onCommonButtonPress,
  btnText,
  CommonButtonStyle,
}: any) {
  return (
    <>
      <TouchableOpacity
        style={[styles.commonButton, CommonButtonStyle]}
        onPress={() => {
          if (onCommonButtonPress) {
            onCommonButtonPress();
          }
        }}
      >
        <Text style={[styles.commonButtonText]}>{btnText}</Text>
      </TouchableOpacity>
    </>
  );
}

export default CommonButton;
