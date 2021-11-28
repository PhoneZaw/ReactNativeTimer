import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import Countdown from './Countdown'
import Display from './Display'

const Timer = () => {
    const [time,setTime] = useState('')
    const [start,setStart] = useState(false)
    const [reset,setReset] = useState(true)
    const [seconds, setSeconds] = useState(0)
    const [color,setColor] = useState('#0f000055')

    useEffect(() => {
        if(start){
            changeColor()
            const interval = setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000)
            if(seconds === 0){
                clearInterval(interval)
            }
            
            return () => clearInterval(interval)
        }
        
    },[seconds,start,color])
    
    const pressHandler = (value) => {
        if(value === 'C'){
            setTime('')
        }else{
            setTime(time + value)
        }
    }

    const startHandler = () => {
        if(reset){
            setReset(false)
            setSeconds(time)
        };
        setStart(!start);
    }

    const resetHandler = () => {
        setTime('')
        setReset(true)
        setStart(false)
        setColor('#0f000055')
    }

    const changeColor = () => {
        switch (true) {
            case (seconds > time*0.75): setColor('#00ff00');break;
            case (seconds > time*0.5): setColor('#ffff00');break;
            case (seconds > time*0.25): setColor('#ffa500');break;
            case (seconds > 0): setColor('#ff0000');break;
            default: setColor('#0f000055');break;
        }
    }

    return (
        <View  style={[styles.container,{backgroundColor: color}]}>
            <Text style={styles.text}>Timer</Text>
            {reset ? <Display time={time} pressHandler={pressHandler}/> : <Countdown seconds={seconds}/>}
            <View style={styles.btnContainer}>
                {time ?
                    <TouchableOpacity style={styles.startBtn} onPress={startHandler}>
                        <Text style={styles.buttonText}>{start ? 'Stop' : 'Start'}</Text>
                    </TouchableOpacity>
                    :
                    null
                }
                {reset ?
                        null
                    :
                    <TouchableOpacity style={styles.startBtn} onPress={resetHandler}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 100,
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
    text: {
        position: 'absolute',
        top: 50,
        marginTop:0,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
})

export default Timer
