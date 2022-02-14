import * as React from "react";
import { Image } from "react-native";
import { Container, Content } from "../../components";
import { Colors, Images } from "../../theme";

import styles from "./Styles";

export interface Props {
  navigation: any;
}

function SplashScreen({ navigation }: Props) {
  setTimeout(() => {
    navigation.navigate("Login");
  }, 2000);

  return (
    <>
      <Container lightContent statusBarColor={Colors.black} safeAreaView={true}>
        <Content contentContainerStyle={styles.container}>
          <Image
            source={Images.splashLogo}
            resizeMode="contain"
            style={styles.splashLogo}
          />
        </Content>
      </Container>
    </>
  );
}

export default SplashScreen;
