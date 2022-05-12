import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Messages from './tab/Message'
import Messages2 from './tab/Message2'

const Tab = createBottomTabNavigator()

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Messages2" component={Messages2} />
    </Tab.Navigator>
  )
}
