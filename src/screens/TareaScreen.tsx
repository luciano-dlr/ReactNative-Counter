import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaAzul}/>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#28425B',
        flex: 1,
        
        flexDirection:'row',
        // alignItems:'stretch',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',

    },
    cajaMorada:{
        // alignSelf:'flex-end',
        // width:100,
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        borderRadius:20,
        backgroundColor:'#5856D6',
        
        
    },
    cajaNaranja:{
       
        width:100,
        height:100,
        top:'10%',
        borderWidth:10,
        borderColor:'white',
        borderRadius:20,
        backgroundColor:'#F0A23B',
        
    },
    cajaAzul:{
        // alignSelf:'flex-start',
        // position:'absolute',
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        borderRadius:20,
        backgroundColor:'#28C4D9',
          
    }

});
