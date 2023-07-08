import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen'

export type TabsStackParamList ={
  home : undefined,
  cart:undefined,
  payment:undefined,
  profile:undefined
}
const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsStackParamList>()
  return (
    
     
    <TabsStack.Navigator>
    
      <TabsStack.Screen name ="home" component={HomeScreen}/>
      <TabsStack.Screen name ="cart" component={Example}/>
      <TabsStack.Screen name ="payment" component={Example}/>
      <TabsStack.Screen name ="profile" component={Example}/>
    </TabsStack.Navigator>
  )
}

export default TabsNavigator

const Example =() => {
return <View/>;
};