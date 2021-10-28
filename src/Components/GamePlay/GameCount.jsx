import React,{useState, useEffect} from 'react'
import './gamePlay.css'
function GameCount({number, setNumber, setNumberOfClicks, setIsRunning}) {
    const addClickNumber = (item1) => {
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

        useEffect(()=>{
          window.addEventListener('keydown', (e) =>{
            if(e.key == 'ArrowRight'){
              for(let i = 0; i < 16; i++){
                if(number[0].title !== '' && number[4].title !== '' && number[8].title !== '' && number[12].title !== '' && number[i].title == ''){
                  number[i].title = number[i-1].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[i-1].title = '';
                  let b = [...number]
                  setNumber(b)
                }else {
                  console.log('men boshmasman');
                }
              }
            }  if(e.key == 'ArrowLeft'){
                if(number[0].title == ''){
                  number[0].title = number[1].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[1].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[1].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[1].title = number[2].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[2].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[2].title == ''){
                  number[2].title = number[3].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[3].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[4].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[4].title = number[5].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[5].title = '';
                  let b = [...number]
                  setNumber(b)
                }else  if(number[5].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[5].title = number[6].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[6].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[6].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[6].title = number[7].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[7].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[8].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[8].title = number[9].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[9].title = '';
                  let b = [...number]
                  setNumber(b)
                }else  if(number[9].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[9].title = number[10].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[10].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[10].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[10].title = number[11].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[11].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[12].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[12].title = number[13].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[13].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[13].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[13].title = number[14].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[14].title = '';
                  let b = [...number]
                  setNumber(b)
                }else if(number[14].title == ''){
                  // number[i + 1].title = number[i].title;
                  number[14].title = number[15].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[15].title = '';
                  let b = [...number]
                  setNumber(b)
                }
            } if(e.key == 'ArrowDown'){
              for(let i = 0; i < 16; i++){
                if(number[i >= 12 ? i == 16 ? 15 : i : i + 4].title == ''){
                  number[i+4].title = number[i].title
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[i].title = '';
                  let b = [...number]
                  setNumber(b)
                }
              }
            } if(e.key == 'ArrowUp'){
              for(let i = 8; i < 16; i++){
                if( i >= 8 && number[15].title !== '' && number[14].title !== '' && number[13].title !=='' && number[12].title !=='' && number[i].title == ''){
                  number[i].title = number[i + 4].title 
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[i+4].title = '';
                  let b = [...number]
                  setNumber(b)
                }
              }
              for(let i = 4; i < 8; i++){
                if(number[i].title == ''){
                  number[i].title = number[i + 4].title 
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[i+4].title = '';
                  let b = [...number]
                  setNumber(b)
                }
              }
              for(let i = 0; i < 4; i++){
                if(number[i].title == ''){
                  number[i].title = number[i + 4].title 
                  let a = [...number]
                  setNumber(a)
                  setNumberOfClicks(prev => prev + 1)
                  number[i+4].title = '';
                  let b = [...number]
                  setNumber(b)
                }
              }
            }else {
              console.log('salom');
            }
          })
        },[])
    return (
        <div className="game_count">
        <div className="row d-flex" style={{margin: '0'}}>
          {
            number.map((item, index) => 
            <div className="col-3" style={{padding: '0'}} >
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
