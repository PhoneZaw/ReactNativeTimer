import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Key = ({number,onClick}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={()=>{onClick(number)}} >
            <Text style={styles.text}>{number}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: 'black'
    }
})

export default Key
