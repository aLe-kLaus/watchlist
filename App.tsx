import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { AppRoutes } from './src/routes/app.routes'
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold
  })

  if (!fontsLoaded) return <AppLoading />
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="light"/>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

