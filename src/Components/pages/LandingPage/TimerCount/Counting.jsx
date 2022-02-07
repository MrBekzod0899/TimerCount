import React, { useState, useEffect } from 'react';
import styles from './counting.module.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ReactAudioPlayer from 'react-audio-player';
import timesound1 from '../../../audio/mixkit-ticking-timer-1056.wav'
import timesound2 from '../../../audio/mixkit-megaphone-female-voice-countdown-924.wav'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} className="justify-content-center text-center">
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Counting(props) {
    const {obj}=props
    const [minutes, setminutes] = useState(25);
    const [second, setsecond] = useState(0);
    const [istimecounting,setIstimeCounting]=useState(false)
    const timerMinute = minutes < 10 ? `0${minutes}` : minutes
    const timerSecond = second < 10 ? `0${second}` : second

    console.log(obj)
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  

    useEffect(()=>{ 
        let intervalId = setInterval(() => {
            clearInterval(intervalId)
            if(istimecounting){
                if (second === 0) {
                    if (minutes !== 0) {
                        setsecond(59)
                        setminutes(prev => prev - 1)
                    }
                }
                else if(minutes===0 && second===0){
                    document.getElementById('player').pause();
                    document.getElementById('player2').pause();
                }
                else {
                    setsecond(prev => prev - 1)
                    console.log(second)
                }
            }   
        }, 1000)

        if(istimecounting && minutes===0 && second<11){
            document.getElementById('player2').play();
            document.getElementById('player').pause();
        }
        else{
            document.getElementById('player2').pause();
        }

        if(minutes ===0 && second===0){
            document.getElementById('player').pause();
            document.getElementById('player2').pause();
            setIstimeCounting(false)
        }

      },[second,istimecounting,minutes])

    const handleStart=()=>{
       setIstimeCounting(!istimecounting)
       document.getElementById('player').play()
    }

    const handleStop=()=>{
        setIstimeCounting(!istimecounting)
        document.getElementById('player').pause()
        document.getElementById('player2').pause()
    }

    const PomodorCount=()=>{
        if(obj){
            setminutes(obj.PomodoraCount)
            document.getElementById('player').pause()  
            setsecond(0)
            setIstimeCounting(false)
        }
        else{
            setminutes(25)
            setsecond(0)
        }
    }
   const ShortBreakCount=()=>{
        if(obj){
            setminutes(obj.shortTimeCount)
            document.getElementById('player').pause()
            setsecond(0)
            setIstimeCounting(false)
        }else{
            setminutes(5)
            setsecond(0)
        }
    }
    const LongBreakCount=()=>{
        if(obj){
            setIstimeCounting(false)
            document.getElementById('player').pause()
            setminutes(obj.longTimeCount)
            setsecond(0)
        }else{
            setminutes(10)
            setsecond(0)
        }
    }


    return (
        <div className={`container-fluid pt-3 ${styles.CountingBody}`}>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 justify-content-center">
                    <Box className='justify-content-center text-center' sx={{ minWidth: 300, minHeight: 400 }}>
                        <div className={`card ${styles.timerCard}`} variant="outlined">
                            <div className='card-header'>
                                <Tabs id="tabs" className={styles.MuiTabsFlexContainer} value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab onClick={PomodorCount} label="Pomodora" {...a11yProps(0)} />
                                    <Tab onClick={ShortBreakCount} label="Short Break" {...a11yProps(1)} />
                                    <Tab onClick={LongBreakCount} label="Long Break" {...a11yProps(2)} />
                                </Tabs>
                            </div>
                            <div className={styles.timerWatch}>
                                <TabPanel className="tabpane" value={value} index={0}>
                                    <span aria-disabled>{timerMinute}:{timerSecond}</span>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <span>{timerMinute}:{timerSecond}</span>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <span>{timerMinute}:{timerSecond}</span>
                                </TabPanel>
                            </div>
                            <div className={styles.Clicker}>
                                {
                                    istimecounting ? <div> <button className="btn text-light" onClick={handleStop}>Stop</button> <SkipNextIcon/></div>  : <button className="btn text-light" onClick={handleStart}>Start</button>
                                }
                            </div>
                            <div className='audioPlayer d-none'>
                                    <ReactAudioPlayer
                                        src={timesound1}
                                        controls
                                        loop
                                        onPlay={e => console.log("onPlay")}
                                        id="player"
                                    />
                                    <ReactAudioPlayer
                                        src={timesound2}
                                        controls
                                        loop
                                        onPlay={e => console.log("onPlay")}
                                        id="player2"
                                    />
                            </div>

                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}
