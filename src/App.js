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

  return (
    <>
    <Jogo palavras={palavras} setPalavraJogo={setPalavraJogo} setIsGameOn={setIsGameOn} palavraJogo={palavraJogo}></Jogo>
    <Letras alfabeto={alfabeto} isGameOn={isGameOn}></Letras>
    <Chute isGameOn={isGameOn}></Chute>
    </>
  );
}

export default App;
