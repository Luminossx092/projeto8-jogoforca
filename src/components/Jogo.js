export default function Jogo({ setIsGameOn, palavraJogo, palavras, setPalavraJogo, letrasApertadas, setLetrasApertadas, contErros, setContErros, gameIsOver, setGameIsOver }) {
    function StartGame() {
        setIsGameOn(true);
        setGameIsOver(false);
        setContErros(0);
        setLetrasApertadas([]);
        setPalavraJogo(palavras[Math.floor(Math.random() * palavras.length)].split(''))
    }
    function Ganhou() {
        return palavraJogo.every(l => letrasApertadas.includes(l)) ? "Ganhou" : "Perdeu"
    }
    return (
        <div class="Jogo">
            <div >
                <img data-test="game-image" class="ImagemForca" src={`./assets/forca${contErros}.png`} alt=""></img>
            </div>
            <div>
                <div className="MenuJogo">
                    <button data-test="choose-word" onClick={StartGame} class="BotaoIniciar">Escolher Palavra</button>
                    <div data-test="word" data-answer={`${palavraJogo}`} className={`PalavraJogo 
                    ${(gameIsOver) ? Ganhou() : ""}`}>
                        {gameIsOver ? palavraJogo.map((l) => {
                            return l;
                        }
                        ).join(' ') : palavraJogo.map((l) => {
                            if (letrasApertadas.includes(l)) {
                                return l;
                            } else { return "_" }
                        }
                        ).join(' ')}
                    </div>
                </div>
            </div>
        </div>
    )
}