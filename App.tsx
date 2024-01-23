import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectScreen } from './src/screens/BoxObjectScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HolaMundoScreen/>
      <ContadorScreen /> */}
      {/* <BoxObjectScreen/> */}
      {/* <DimensionesScreen/> */}
      <PositionScreen/>

    </SafeAreaView>
  )
}