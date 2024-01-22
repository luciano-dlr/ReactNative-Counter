import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';


interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;

}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {

        return(
            <TouchableOpacity

            activeOpacity={0.6}
            
            style={[
            
                styles.fabLocation,
            
                (position === 'bl') ? styles.left : styles.right
            
            ]}

            onPress={onPress}
        >

            <View style={styles.fab}>

                <Text style={styles.fabText}>{title}</Text>

            </View>

        

        </TouchableOpacity>
        )

    }


    const android = () => {

        return (
            <View
                style={[

                    styles.fabLocation,

                    (position === 'bl') ? styles.left : styles.right

                ]}
            >

                <TouchableNativeFeedback

                    // Caso 1 con uso ternario solo

                    // style={
                    //     (position === 'bl')
                    //     ? styles.fabLocationBL
                    //     : styles.fabLocationBR
                    // }

                    //Caso 2 con uso ternario en un array de estylos


                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('green', false, 30)}

                >

                    <View style={styles.fab}>

                        <Text style={styles.fabText}>{title}</Text>

                    </View>

                </TouchableNativeFeedback>

            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
}


const styles = StyleSheet.create({
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25
    },
    right: {
        right: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    fabText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'

    }


})

