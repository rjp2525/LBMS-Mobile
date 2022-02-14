import React from "react";
import { View, StatusBar, Dimensions, LogBox } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import Styles from "./src/theme/AppStyle";
import store from "./src/store";
import AppNavigation from "./src/navigation/AppNavigation";
import { navigationRef, isReadyRef } from "./src/navigation/ReduxNavigation";

LogBox.ignoreAllLogs();

const { width } = Dimensions.get("window");

EStyleSheet.build({ $rem: width / 375 });

export default function App() {
  return (
    <View style={Styles.rootContainer}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          theme={{ colors: { background: "#181F27" } }}
          onReady={() => {
            isReadyRef.current = true;
          }}
        >
          <AppNavigation />
        </NavigationContainer>
      </Provider>
      <View style={Styles.statusBarBlurBg}></View>
    </View>
  );
}
