import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TwoDigit,{TwoDot} from './TwoDigit'

const SetTimer = ({time}) => {
    return (
        <View style={styles.container}>
            {time? 
            <Text style={styles.text}>
                {time}
            </Text> : 
            <Text style={styles.text0}>
                00
            </Text>
            }
            {/* <TwoDigit />
            <TwoDot />
            <TwoDigit />
            <TwoDot />
            <TwoDigit /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10
    },
    text: {
        fontSize: 40,
        color: 'black'
    },
    text0: {
        fontSize: 40,
        color: '#00000055'
    }
})

export default SetTimer
