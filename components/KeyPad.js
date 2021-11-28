import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Key from './Key'

const KeyPad = ({onClick}) => {
    return (
        <View>
            <View style={styles.row}>
                <Key number={1} onClick={onClick}/>
                <Key number={2} onClick={onClick}/>
                <Key number={3} onClick={onClick}/>
            </View>
            <View style={styles.row}>
                <Key number={4} onClick={onClick}/>
                <Key number={5} onClick={onClick}/>
                <Key number={6} onClick={onClick}/>
            </View>
            <View style={styles.row}>
                <Key number={7} onClick={onClick}/>
                <Key number={8} onClick={onClick}/>
                <Key number={9} onClick={onClick}/>
            </View>
            <View style={[styles.row,styles.lastRow]}>
                <Key number={0} onClick={onClick}/>
                <Key number={'C'} onClick={onClick}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 0
    },
    lastRow: {
        marginLeft: '35%'
    }
});

export default KeyPad
