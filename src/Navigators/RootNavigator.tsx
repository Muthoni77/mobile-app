
import React from 'react'
import {NavigatorScreenParams} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DetailsScreen from '../Screens/DetailsScreen'
import TabsNavigator, { TabsStackParamList } from './TabNavigator'

export type RootStackParamList = {
    TabsStack:NavigatorScreenParams<TabsStackParamList>;
    details: undefined
}

const RootStack = createNativeStackNavigator <RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
         <RootStack.Screen name ="TabsStack" component={TabsNavigator}/>
         <RootStack.Screen name ="details" component={DetailsScreen}/>
    </RootStack.Navigator>
     
    
  )
}

export default RootNavigator