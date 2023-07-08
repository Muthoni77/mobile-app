
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import {DefaultTheme, NavigationContainer, Theme} from "@react-navigation/native"
// Import [LinearGradient ] from 'expo-linear-gradient';
import RootNavigator from './src/Navigators/RootNavigator';
import { useMemo } from 'react';
import { color } from 'react-native-reanimated';
// import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
 const theme: Theme= useMemo(()=>({...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background : "#f5f5f5",
    text:"#191919",
    border:"#D9D9D9",
    Primary:"#i91919"
    
   },
   
   
}
  ),
 []
 );
  return (
    <View style={styles.container}>
     <NavigationContainer theme={theme}>
   
      
     
                <RootNavigator/>
                <StatusBar style="dark"/>
                {/* <Icon name="add-to-queue-button" color="red" /> */}

            </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

