import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'

import BottomTabs from './src/navigation/BottomTabs'
import { store } from './src/redux/store'


export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
