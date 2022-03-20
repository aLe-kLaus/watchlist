import React, { createContext, SetStateAction, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppRoutes } from './src/routes/app.routes'
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';
import { dataKey, Movie } from './src/types';
import { Context } from './src/Context';

export default function App() {
  const [storageData, setStorageData] = useState<Movie[]>([])
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold
  })

  const getStorageMovies = async () => {
    const response = await AsyncStorage.getItem(dataKey)
    setStorageData(JSON.parse(response!))
  }

  useEffect(() => {
    getStorageMovies()
  }, [])

  if (!fontsLoaded) return <AppLoading />
  return (
    <Context.Provider value={{
      storageData,
      setStorageData,
    }}>
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="light"/>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
    </Context.Provider>
  );
}

