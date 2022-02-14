import * as React from "react";
import { View, Text, Image } from "react-native";
import { Container, Content } from "../../components";
import CommonButton from "../../components/CommonButton";
import CommonInput from "../../components/CommonInput";
import { Colors, Images } from "../../theme";

import styles from "./Styles";

export interface Props {
  navigation: any;
}

function LoginAccount({ navigation }: Props) {
  return (
    <>
      <Container lightContent statusBarColor={Colors.black} safeAreaView={true}>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.accountHeadingParagraphContent}>
            <Image
              source={Images.loginLogo}
              resizeMode="contain"
              style={styles.accountHeading}
            />
          </View>
          <View style={styles.accountInputBtnContent}>
            <CommonInput
              normalInput
              placeholder="Email Address"
              keyboardType="email-address"
              CommonInputContentStyle={styles.inputContentStyle}
            />
            <CommonInput
              passwordInput
              placeholder="Password"
              keyboardType="default"
              CommonInputContentStyle={styles.inputContentStyle}
            />
            <CommonButton
              btnText="Login"
              commonButtonStyle={styles.CommonButtonStyle}
              onCommonButtonPress={() => navigation.navigate("Home")}
            />
            <Text
              style={styles.forgotPswBtnText}
              onPress={() => navigation.navigate("ForgotPswStepOne")}
            >
              Forgot password
            </Text>
          </View>
        </Content>
      </Container>
    </>
  );
}

export default LoginAccount;
