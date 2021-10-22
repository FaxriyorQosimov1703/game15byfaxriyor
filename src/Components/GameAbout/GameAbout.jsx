import React from 'react'
import {Link} from 'react-router-dom';
import {FaHome, FaArrowCircleLeft} from 'react-icons/fa';

import '../gameStyle.css'
import './gameAbout.css'
function GameAbout() {
    return (
        <div className="game_about">
            <div className="game_about_wrapper">
            <Link to='/'>
              <div className="bg_wood about_back_button prefrence_button mb-2">
                <FaArrowCircleLeft className="prefrence_button_icon" />
              </div>
            </Link>
                <div className="game_about_card">
                    <img src=".././images/about_wood.png" alt="" />
                    <div className="game_about_card_wrapper">
                        <div className="game_about_card_wrapper_content">
                            <p>Hi, did you want to see how this game is played before you play 15 board games. You did the right thing, darling, let's see together.</p>
                            <h1 >Menu</h1>
                            <img width="100%" src="../../images/game_about_home.png" alt="" />
                            <p>The first thing we have is a play button that gives us access to our game (how to play is given later). Then comes the leaders button, which saves you your opponents and turns a simple 15 game into a real exam. 15 game into a real exam. After the Leader button comes the About button and it is the current window. The last one is the ixit button which will help you exit the game, but think 7 times before exiting.</p>
                            <h1>In game...</h1>
                            <img width="100%" src="../../images/game_about_gamepart.png" alt="" />
                            <p>And finally we get to the main content of the game, at the top there is a scorrboard that counts the number of steps we walk, and there is also a scoreboard whose partner counts the time. But the main condition of the game is to correct the mistakes at the top, as in the bottom, and then you win.</p>
                            <img width="100%" src="../../images/game_about_gameorders.png" alt="" />
                            <p>At the bottom are the help buttons, the first one sits in the main window, the next one turns it off if the music is interfering, and the last one dials 0 from the beginning if you want to start playing (but think before you click, because the results are not saved).</p>
                            <h1>Competitors</h1>
                            <img width="100%" src="../../images/game_about_gameliders.png" alt="" />
                            <p>Now we are greeted by our opponents and it is time for us to show them how strong our mastery is and who the real master is here, this is when we enter the widow of leaders. Good luck Admiral ...</p>
                            <p>This game was created from Faxriyor Qosimov in 2021 year winter, when he studied programming in PDP Academy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameAbout
