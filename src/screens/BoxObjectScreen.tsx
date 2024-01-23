import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectScreen = () => {
  return (
    <View style={styles.contanier} >
      <Text style={styles.title}> Box Object Model</Text>
    </View>
  )
}


//flex colum por default 

const styles = StyleSheet.create({
    contanier:{
      flex:1,
      backgroundColor:'red'
    },
  
    title:{
      paddingVertical:20,
      paddingHorizontal:100,
      fontSize:20,
      // width:150,
      borderWidth:10,
      borderRadius:100,
      
      

    }
})