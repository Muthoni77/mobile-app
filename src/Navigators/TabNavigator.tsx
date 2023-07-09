import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen'
import Icons from "@expo/vector-icons/MaterialIcons"

export type TabsStackParamList ={
  home : undefined,
  cart:undefined,
  payment:undefined,
  profile:undefined
}
const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsStackParamList>()
  return (
    
     
    <TabsStack.Navigator 
    screenOptions={{tabBarShowLabel:false}}
    >
    
      <TabsStack.Screen name ="home" component={HomeScreen}  
       options={{
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='home' {...props}/>
          },
         }}/>
      <TabsStack.Screen name ="cart" component={Example}
        options={{
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='cases' {...props}/>
          },
         }}
      />
      <TabsStack.Screen name ="payment" component={Example}
        options={{
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='account-balance-wallet' {...props}/>
          },
         }}/>
      <TabsStack.Screen name ="profile" component={Example}
        options={{
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='person' {...props}/>
          },
         }}/>
    </TabsStack.Navigator>
  )
}

export default TabsNavigator

const Example =() => {
return <View/>;
};