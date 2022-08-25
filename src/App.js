import "./App.css";
import MainMenu from "./Components/MainMenu";
import QuizApp from "./Components/QuizApp";
import EndScreen from "./Components/EndScreen";
import React,{ useState } from "react";
import { GameStateContext } from "./Helpers/Contexts";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  const styleBG = (style) =>{
switch (style){
case 'menu': 
return 'AppMenu'
case 'playing':
  return 'AppQuiz'
  case 'finished':
    return 'AppEndScreen'
    default:
      return 'AppMenu'
}
  }

  return (
    <div className={styleBG(gameState)}>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "playing" && <QuizApp />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;