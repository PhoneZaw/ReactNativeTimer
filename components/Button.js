import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({onPress,text}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Icon style={styles.buttonText} name={text} size={20} color='#fff' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 50,
        marginRight: 40,
        height: 60,
        width: 60,
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        
    },
})

export default Button
