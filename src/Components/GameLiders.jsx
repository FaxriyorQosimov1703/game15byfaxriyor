import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FaHome, FaArrowCircleLeft} from 'react-icons/fa';
import axios from 'axios'
function GameLiders() {
    const [a, Sa] = useState([]);
    const [b, Sb] = useState([])
    
    a.map(item => item.id % 2 == 0 && b.push(item.numberClick))
    console.log( b.sort((a, b)=> {return a-b}));

    a ? console.log( a ) : console.log('hayr');
    useEffect(()=>{
        axios.get('http://localhost:5000/numbers').then(res => {
            Sa(res.data)
        })
    },[])

    return (
        <div className="game_liders">
           <div className="game_liders_wrapper">
           <Link to='/'>
              <div className="bg_wood prefrence_button mb-2">
                <FaArrowCircleLeft className="prefrence_button_icon" />
              </div>
            </Link>
               <div className="game_liders_card">
                <img src="../../images/liders_wood1-remove.png" alt="" />
                    <h1 className="game_lider_item game_lider_item_1">Admiral <span >{ b[0] ? b[0] : 0}</span></h1>
                    <h1 className="game_lider_item game_lider_item_2">General <span>{ b[1] ? b[1] : 0}</span> </h1>
                    <h1 className="game_lider_item game_lider_item_3">Leytenant <span>{ b[2] ? b[2] : 0}</span> </h1>
                    <h1 className="game_lider_item game_lider_item_4">Mayor <span>{ b[3] ? b[3] : 0}</span> </h1>
                    <h1 className="game_lider_item game_lider_item_5">Soldat <span>{ b[4] ? b[4] : 0}</span> </h1>

               </div>
           </div>
        </div>
    )
}

export default GameLiders
