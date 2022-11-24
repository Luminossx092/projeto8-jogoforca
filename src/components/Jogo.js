export default function Jogo({setIsGameOn,palavraJogo,palavras,setPalavraJogo}) {
    function StartGame(){
        setIsGameOn(true);
        setPalavraJogo(palavras[Math.floor(Math.random()*palavras.length)].split(''))
    }

    return (
        <div class="Jogo">
            <div >
                <img class="ImagemForca" src="./assets/forca0.png" alt=""></img>
            </div>
            <div>
                <div className="MenuJogo">
                    <button onClick={StartGame} class="BotaoIniciar">Escolher Palavra</button>
                    <div className="PalavraJogo">
                        {palavraJogo.map((l)=>"_").join(' ')}
                    </div>
                </div>
            </div>
        </div>
    )
}