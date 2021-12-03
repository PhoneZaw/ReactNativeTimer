import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const title = ({text}) => {
    return <Text style={styles.text}>{text}</Text>
}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        top: 50,
        marginTop:0,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
})

export default title
