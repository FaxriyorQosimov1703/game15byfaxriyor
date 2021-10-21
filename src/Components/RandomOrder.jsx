import React,{useEffect, useState} from 'react'
import {BiRefresh} from 'react-icons/bi';

function RandomOrder({setMinut, setNumberOfClicks, setSecund, number, setOrderNumber}) {
    const onRandomClick = () => {
        let randomString = localStorage.getItem('randoms');
        let randomArray = JSON.parse(randomString);
        setOrderNumber(randomArray)
        number[0].title = randomArray[0]
        number[1].title = randomArray[1]
        number[2].title = randomArray[2]
        number[3].title = randomArray[3]
        number[4].title = randomArray[4]
        number[5].title = randomArray[5]
        number[6].title = randomArray[6]
        number[7].title = randomArray[7]
        number[8].title = randomArray[8]
        number[9].title = randomArray[9]
        number[10].title = randomArray[10]
        number[11].title = randomArray[11]
        number[12].title = randomArray[12]
        number[13].title = randomArray[13]
        number[14].title = randomArray[14]
        number[15].title = ''
        setSecund(0)
        setNumberOfClicks(0)
        setMinut(0)
      }
    return (
        <div className="bg_wood prefrence_button "  onClick={onRandomClick}>
        <BiRefresh className="prefrence_button_icon" />
      </div>
    )
}

export default RandomOrder
