import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import Countdown from './Countdown'
import Title from './Title'

const Stopwatch = () => {

    const [time, setTime] = React.useState(0)
    const [isRunning, setIsRunning] = React.useState(false)

    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(() =>{
            setTime(time=>time+1)
            }, 1000)
            return () => clearInterval(interval)
        }
    },[time,isRunning])
    
    const startHandler = () => {
        setIsRunning(!isRunning)
    }

    const resetHandler = () => {
        setIsRunning(false)
        setTime(0)
    }
    return (
        <View style={styles.container}>
            <Title text="Stopwatch" />
            <Countdown seconds={time}/>
            <View style={styles.btnContainer}>
                <Button text={isRunning ? 'pause' : 'play'} onPress={startHandler} />
                <Button text='undo' onPress={resetHandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f000055'
    },
    
    btnContainer: {
        paddingLeft: '42%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 100,
    },
})

export default Stopwatch
