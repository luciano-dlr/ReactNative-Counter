import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde}/>
      <View style={styles.cajaMorada}/>
      <View style={styles.cajaNaranja}/>
    </View>
  )
}

//por defecto todos los elementos que construimos
//tienen la position 'relative'

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'#28C4D9',
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor: '#5856D6',
        borderWidth:10,
        borderColor:'white',
        borderRadius:25,
        position:'absolute',
        right:20,
        top:20
      
      
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor: '#F0A23B',
        borderWidth:10,
        borderColor:'white',
        borderRadius:25,
        bottom:20,
        position:'absolute',
        right:20

    },
    cajaVerde:{
      // width:100,
      // height:100,
      backgroundColor: 'green',
      borderWidth:10,
      borderColor:'white',
      borderRadius:25,
      // bottom:20,
      // position:'absolute',
      // left:20,
      // right:20,
      ...StyleSheet.absoluteFillObject
      
      
    }

});


