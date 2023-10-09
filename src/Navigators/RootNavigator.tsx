import React from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import DetailsScreen from "../Screens/DetailsScreen";
import TabsNavigator, { TabsStackParamList } from "./TabNavigator";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="details" component={DetailsScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
