import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import SetTimer from './SetTimer'
import KeyPad from './KeyPad'

const Display = ({time,pressHandler}) => {

    return (
        <View style={styles.container}>
            <SetTimer time={time}/>
            <KeyPad onClick={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 80,
        width: '60%',
        backgroundColor: '#ffffff99',
        borderRadius: 10,
    },
});

export default Display
