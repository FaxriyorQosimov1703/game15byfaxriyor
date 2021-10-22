import React,{useState, useEffect} from 'react'
import './gamePlay.css'
function GameCount({number, setNumber, setNumberOfClicks, setIsRunning}) {
    const addClickNumber = (item1) => {
        // setIsRunning(true)
    
    
        if(number[item1.id == 16 ? 15 : item1.id].title == ''){
          number[item1.id].title = item1.title;
          let a = [...number]
          setNumber(a)
          setNumberOfClicks(prev => prev + 1)
          item1.title = '';
          let b = [...number]
          setNumber(b)
        }else if(number[item1.id < 5 ? item1.id : item1.id - 5].title == '') {
            number[item1.id - 5].title = item1.title;
            let a = [...number]
            setNumber(a)
            setNumberOfClicks(prev => prev + 1)
            item1.title = '';
            let b = [...number]
            setNumber(b)
          }else if(number[item1.id == 1 ? 1 : item1.id - 2].title == '') {
            number[item1.id - 2].title = item1.title;
            let a = [...number]
            setNumber(a)
            setNumberOfClicks(prev => prev + 1)
            item1.title = '';
            let b = [...number]
            setNumber(b)
          }else if(number[item1.id > 12 ? item1.id == 16 ? 15 : item1.id : item1.id + 3].title == '' ){
            number[item1.id + 3].title = item1.title;
            let a = [...number]
            setNumber(a)
            setNumberOfClicks(prev => prev + 1)
            item1.title = '';
            let b = [...number]
            setNumber(b)
          }
          else {
            console.log('battar bol');
          }
        }
    return (
        <div className="game_count">
        <div className="row d-flex aka">
          {
            number.map((item, index) => 
            <div className="col-3" >
              <div className={`${item.title == '' ? 'bg_transparent' : 'bg_dark bg_wood'}`} onClick={() => addClickNumber(item)}>
                {item.title}
              </div>
              </div>
            )
          }
        </div>
      </div>
    )
}

export default GameCount
