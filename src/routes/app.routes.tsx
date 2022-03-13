import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useTheme } from "styled-components";
import {MaterialIcons} from '@expo/vector-icons'

import { WatchList } from "../screens/Watchlist";
import { NewMovie } from "../screens/NewMovie";

const {Navigator, Screen} = createBottomTabNavigator()

export const AppRoutes = () => {
  const theme = useTheme()

  return (
    <Navigator screenOptions={{
      headerTitleStyle: {
        fontSize: 22,
        fontFamily: theme.fonts.bold,
      },
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.light,
      tabBarActiveTintColor: theme.colors.light,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarActiveBackgroundColor: theme.colors.primary,
      tabBarLabelPosition: 'beside-icon',
      tabBarStyle: {
        height: 60,
      }

    }}>
      <Screen name="My Queue" component={WatchList} options={{
        tabBarIcon: (({size, color}) => <MaterialIcons name="movie" size={size} color={color} />)
      }}/>
      <Screen name="Add to Queue" component={NewMovie} options={{
        tabBarIcon: (({size, color}) => <MaterialIcons name="add-to-queue" size={size} color={color} />)
      }}/>
    </Navigator>
  )
}