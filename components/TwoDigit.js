import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TwoDigit = () => {
    return (
        <View>
            <Text style={styles.text}>00</Text>
        </View>
    )
}

const TwoDot = () => {
    return <Text style={styles.text}>:</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: 'blue'
    }
})

export default TwoDigit
export { TwoDot }
