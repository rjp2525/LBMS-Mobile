import * as React from "react";
import { TextInput, View } from "react-native";
import { Colors } from "../../theme";
import styles from "./Styles";

export interface Props {
  navigation: any;
  placeholder?: any;
  CommonInputStyle?: any;
  keyboardType?: any;
  CommonInputContentStyle?: any;
  normalInput?: any;
  passwordInput?: any;
}

function CommonInput({
  placeholder,
  CommonInputStyle,
  keyboardType,
  CommonInputContentStyle,
  normalInput,
  passwordInput,
}: any) {
  return (
    <>
      <View style={CommonInputContentStyle}>
        {normalInput && (
          <TextInput
            style={[styles.inputStyle, CommonInputStyle]}
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={Colors.lightGray}
          />
        )}
        {passwordInput && (
          <TextInput
            secureTextEntry
            style={[styles.inputStyle, CommonInputStyle]}
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={Colors.lightGray}
          />
        )}
      </View>
    </>
  );
}

export default CommonInput;
