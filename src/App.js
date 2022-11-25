import React from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import palavras from "./palavras";
import alfabeto from "./alfabeto";


function App() {
  const [isGameOn, setIsGameOn] = React.useState(false);
  const [contErros, setContErros] = React.useState(0);
  const [palavraJogo, setPalavraJogo] = React.useState([]);
  const [letrasApertadas, setLetrasApertadas] = React.useState([]);
  const [inputChute, setInputChute] = React.useState("");
  const [gameIsOver, setGameIsOver] = React.useState(false);

  return (
    <>
      <Jogo palavras={palavras} setPalavraJogo={setPalavraJogo} setIsGameOn={setIsGameOn} palavraJogo={palavraJogo} letrasApertadas={letrasApertadas} setLetrasApertadas={setLetrasApertadas} contErros={contErros} setContErros={setContErros} gameIsOver={gameIsOver} setGameIsOver={setGameIsOver}></Jogo>
      <Letras alfabeto={alfabeto} isGameOn={isGameOn} setIsGameOn={setIsGameOn} letrasApertadas={letrasApertadas} setLetrasApertadas={setLetrasApertadas} contErros={contErros} setContErros={setContErros} palavraJogo={palavraJogo} setGameIsOver={setGameIsOver}></Letras>
      <Chute isGameOn={isGameOn} setIsGameOn={setIsGameOn} palavraJogo={palavraJogo} letrasApertadas={letrasApertadas} setLetrasApertadas={setLetrasApertadas} setContErros={setContErros} inputChute={inputChute} setInputChute={setInputChute} setGameIsOver={setGameIsOver}></Chute>
    </>
  );
}

export default App;
