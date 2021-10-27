import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa';
import MusicControls from '../MusicControls';
import RandomOrder from '../RandomOrder';
import GameCount from './GameCount';
import HeaderTwoButton from '../HeaderTwoButton';
import axios from 'axios'
import { collection, addDoc} from 'firebase/firestore'
import {db} from '../../Firebase/config';


import '../../App.css';
import '../gameStyle.css';
import './gamePlay.css'


function Game_part() {
  const [orderNumber, setOrderNumber] = useState(null)
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [secund, setSecund] = useState(0)
  const [minut, setMinut] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  
  const usersCollectionRef = collection(db, "liders")






  function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getNonRepeatingRand(min, max, num) {
    let res = []
    for (let i = 0; i < num; i++) {
      let n = rand(min, max);
      if (res.indexOf(n) == -1) {
        res.push(n)
      } else {
        i--;
      }
    }
    localStorage.setItem('randoms', JSON.stringify(res))
  }
  getNonRepeatingRand(1,15,15)
  // [5,15,1,4,11,7,12,2,6,10,13,3,8,14,9]
  let orderNumber1 = orderNumber === null ? [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11] : orderNumber
  const [number, setNumber] = useState([
    {id:1, title:  orderNumber1[0]},
    {id:2, title:  orderNumber1[1]},
    {id:3, title:  orderNumber1[2]}, 
    {id:4, title:  orderNumber1[3]},
    {id:5, title:  orderNumber1[4]},  
    {id:6, title:  orderNumber1[5]},
    {id:7, title:  orderNumber1[6]},
      {id:8, title:  orderNumber1[7]},
      {id:9, title:  orderNumber1[8]},
      {id:10, title: orderNumber1[9]},
      {id:11, title: orderNumber1[10]},
      {id:12, title: orderNumber1[11]},
      {id:13, title: orderNumber1[12]},
      {id:14, title: orderNumber1[13]},
      {id:15, title: orderNumber1[14]},
      {id:16, title: ''}
    ])

  useEffect(()=>{
    // alert('salom')
  if(number[0].title == 1 && 
    number[1].title == 2 &&
    number[2].title == 3 &&
    number[3].title == 4 &&
    number[4].title == 5 &&
    number[5].title == 6 &&
    number[6].title == 7 &&
    number[7].title == 8 &&
    number[8].title == 9 &&
    number[9].title == 10 &&
    number[10].title == 11 &&
    number[11].title == 12&&
    number[12].title == 13&&
    number[13].title == 14&&
    number[14].title == 15&&
    number[15].title == ''
    
    ){
      // setIsRunning(false)
      localStorage.setItem('numbers', JSON.stringify(number))
      axios.post('http://localhost:5000/numbers',{
        numberClick: numberOfClicks
      }).then(res => {
        console.log(res.data);
      })

      addDoc(usersCollectionRef, {numberClick: numberOfClicks})
      
    }
  },[numberOfClicks])



  if(secund === 59){
    setMinut(prev => prev + 1)
    setSecund(0)
  }
useEffect(()=>{
  setIsRunning(true)

})
  useEffect(()=>{
    // console.log(isRunning);
    // if(isRunning) {
      const i = setInterval(()=> {
        if(secund === 59){
            setMinut(prev => prev + 1)
            setSecund(0)
        }else {
          setSecund(a=>a+1)
        }
      }, 1000)

      return () => clearInterval(i)
    // }
  },[])
 function addClickBack() {
   alert('salom')
 }
    return (
      <div className="game_parent">

        <HeaderTwoButton 
          numberOfClicks={numberOfClicks}
          minut={minut}
          secund={secund}
        />
        
        <div className="game_body">
          {/* <video width="100%" height="100%" src="../../images/confetti.gif" controls></video> */}
         
          <div className="Game_wrapper">
            <img src="../../images/wood-ramka11_nobg1.jpg" alt="" />
            <GameCount 
              number={number}
              setIsRunning={setIsRunning}
              setNumberOfClicks={setNumberOfClicks}
              setNumber={setNumber}
            />
          </div>
          <div className="game_body_right">
            <Link to='/'>
              <div className="bg_wood prefrence_button mb-2">
                <FaHome className="prefrence_button_icon" />
              </div>
            </Link>
            <div className="bg_wood prefrence_button mb-2" onClick={addClickBack}>
                <div className="prefrence_button_icon" > b </div>
              </div>
              <MusicControls  />
              <RandomOrder
                setOrderNumber={setOrderNumber}
                setMinut={setMinut}
                setNumberOfClicks={setNumberOfClicks}
                setSecund={setSecund}
                number={number}
              />
          </div>
        </div>
      </div>
  );
}

export default Game_part;