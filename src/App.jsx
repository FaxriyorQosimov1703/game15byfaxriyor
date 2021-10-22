import React from "react";
import { Route, Switch } from "react-router";
import Details from "./Details";
import Game_part from "./Components/GamePlay/Game_part.jsx";
import GameLiders from "./Components/GameLiders/GameLiders.jsx";
import GameAbout from "./Components/GameAbout/GameAbout";
import "./App.css";
function App() {
  return (
    <div className="wood_wrapper">
      {/* <iframe width="100%" height="100%" src="https://momento360.com/e/u/84d46e7180a540ce84110d793a24c50a?utm_campaign=embed&utm_source=other&heading=27&pitch=2.2&field-of-view=75&size=medium" frameborder="0"></iframe> */}
      {/* <iframe width="100%" height="100%" src="https://momento360.com/e/u/0d32c4f3d5114a56bcc307f8061c2e83?utm_campaign=embed&utm_source=other&heading=13.4&pitch=-0.2&field-of-view=75&size=medium" frameborder="0"></iframe> */}
      {/* <video autoplay loop controls>
           <source type="video/mp4" src="../images/Forest_Ambience___Travel_Bucket___Nature_Sound___Cinematic___Short.mp4"  />
         </video> */}
      <Switch>
        <Route exact path="/" component={Details} />
        <Route exact path="/game" component={Game_part} />
        <Route exact path="/liders" component={GameLiders} />
        <Route exact path="/about" component={GameAbout} />
      </Switch>
    </div>
  );
}

export default App;
