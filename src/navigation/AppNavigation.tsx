import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SplashScreen from "../screens/Splash/SplashScreen";
import AuthLoginScreen from "../screens/Auth/LoginScreen";

import { Image } from "react-native";
import { isIphoneX } from "../libs/Utils";
import { Colors, Images } from "../theme";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {<Stack.Screen name="Splash" component={SplashScreen} />}
      <Stack.Screen name="Login" component={AuthLoginScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
