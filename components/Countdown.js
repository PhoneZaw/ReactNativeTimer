import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Countdown = ({seconds}) => {

    return (
        
            <View style={styles.timeCircle}>
                <Text style={styles.text}>{seconds}</Text>
            </View>
           
        
    )
}

const styles = StyleSheet.create({
    
    timeCircle: {
        marginTop: 20,
        height: 300,
        width: 300,
        backgroundColor: '#00000055',
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
    },
    btnContainer: {
        flexDirection: 'row',
    },
    startBtn: {
        marginTop: 50,
        marginLeft: 20,
        height: 50,
        width: 100,
        backgroundColor: 'blue',
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }
})

export default Countdown
