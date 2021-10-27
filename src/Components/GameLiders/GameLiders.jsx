import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FaHome, FaArrowCircleLeft} from 'react-icons/fa';
import axios from 'axios';
import {db} from '../../Firebase/config';
import { collection, getDocs} from 'firebase/firestore'


import './gameLiders.css'
function GameLiders() {

    const [topLider, setTopLider] = useState([]);
    const [liders, setLiders] = useState([]);

    liders.map(item => item && topLider.push(item.numberClick))

    const usersCollectionRef = collection(db, "liders")
    useEffect(()=>{
        const getLiders = async () => {
            const data = await getDocs(usersCollectionRef)
            setLiders(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        getLiders()
        topLider.sort((ai, bi)=> {return ai-bi})
    },[])

    
    topLider.sort((a, b)=> {return a-b})

    return (
        <div className="game_liders">
           <div className="game_liders_wrapper">
           <Link to='/'>
              <div className="bg_wood prefrence_button mb-2">
                <FaArrowCircleLeft className="prefrence_button_icon" />
              </div>
            </Link>
               <div className="game_liders_card">
                <img src="../../../images/liders_wood1-remove.png" alt="" />
                    <h1 className="game_lider_item game_lider_item_1">Admiral <span >{ topLider[0] ? topLider[0] : 0}</span></h1>
                    <h1 className="game_lider_item game_lider_item_2">General <span>{ topLider[1] ? topLider[1] : 0}</span> </h1>
                    <h1 className="game_lider_item game_lider_item_3">Leytenant <span>{ topLider[2] ? topLider[2] : 0}</span> </h1>
                    <h1 className="game_lider_item game_lider_item_4">Mayor <span>{ topLider[3] ? topLider[3] : 0}</span> </h1>
                    <h1 className="game_lider_item game_lider_item_5">Soldat <span>{ topLider[4] ? topLider[4] : 0}</span> </h1>
               </div>
           </div>
        </div>
    )
}

export default GameLiders
