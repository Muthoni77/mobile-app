import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";

import RootNavigator from "./src/Navigators/RootNavigator";
import { useMemo } from "react";
import { color } from "react-native-reanimated";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// import {NavigationContainer} from '@react-navigation/native'


export default function App() {
  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#f5f5f5",
        text: "#191919",
        border: "#D9D9D9",
        primary: "#191919",
      },
    }),
    []
  );
  return (
    <GestureHandlerRootView style={styles.container}>
    <NavigationContainer theme={theme}>
      <BottomSheetModalProvider>
        <RootNavigator />
      </BottomSheetModalProvider>
      {/* <StatusBar style={colorScheme === "dark" ? "light" : "dark"} /> */}
      <StatusBar style="dark"/>
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
