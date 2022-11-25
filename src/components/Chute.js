export default function Chute({isGameOn,setIsGameOn,palavraJogo, setContErros, inputChute,setInputChute, setGameIsOver,letrasApertadas, setLetrasApertadas}){
    function VerifyCorrectWord(){
        setIsGameOn(false);
        setInputChute("");
        setGameIsOver(true);
        if(inputChute.split("").every(p=>palavraJogo.includes(p))){
            console.log([...letrasApertadas, palavraJogo.filter(l=>(!letrasApertadas.includes(l)))])
            setLetrasApertadas([...letrasApertadas, ...palavraJogo.filter(l=>(!letrasApertadas.includes(l)))])
        }
        else{
            setContErros(6)
        }
    }
    return(
        <div className="Chute">
            <div className="JaSeiAPalavra">
                Já sei a palavra!
            </div>
            <div>
                <input data-test="guess-input"value={inputChute} onChange={e=>setInputChute(e.target.value)} disabled={!isGameOn} className="InputChute"></input>
            </div>
            <div>
                <button data-test="guess-button" onClick={VerifyCorrectWord} className="BotaoChute">Chutar</button>
            </div>
        </div>
    )
}