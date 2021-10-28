import React,{useRef, useState, useEffect} from 'react'
import {FaMicrophone, FaMicrophoneAlt, FaMicrophoneSlash} from 'react-icons/fa'

function MusicControls() {
    const [playerPause, setPlayerPause] = useState(true);
    const [dur, setDur] = useState(0);
    const [visibleMicrofone, setvisibleMicrophone] = useState(true)

    const audio = useRef('audio_tag')
    const setVolume = (q) => {
        audio.current.volume = q;
    }

    const toggle = () => {
        setDur(audio.current.duration);
        if(visibleMicrofone){
            audio.current.play();
        }else {
            audio.current.pause();
        }
        setvisibleMicrophone(prev => !prev)
      setPlayerPause(prev=>!prev)
  }
  const [volum, setVolum] = useState(0.5)
console.log('salom');
  useEffect (()=>{
    setVolume(volum);
}, [volum])
    return (
        <div className="bg_wood prefrence_button  mb-2" onClick={toggle}>
            <audio
                onCanPlay={(e)=>setDur(e.target.duration)}
                onCanPlay={(e)=>setDur(e.target.duration)}
                ref={audio}
                autoPlay={false}
                width="100%"
                height="60px"
                preload={'auto'}
                src="../../images/music.mp3" ></audio>
                {visibleMicrofone ? <FaMicrophoneSlash className="prefrence_button_icon" /> : <FaMicrophone className="prefrence_button_icon" />}
                </div>
    )
}

export default MusicControls
