export default function Letras({ alfabeto, isGameOn, setIsGameOn, letrasApertadas, setLetrasApertadas, contErros, setContErros, palavraJogo, setGameIsOver }) {
    function isLetterDisabled(l) {
        return !isGameOn || letrasApertadas.includes(l);
    }

    function VerifyPressedLetter(l) {
        const newLetrasApertadas=[...letrasApertadas, l];
        setLetrasApertadas(newLetrasApertadas)
        if (!palavraJogo.includes(l)) {
            setContErros(contErros + 1);
            if (contErros === 5) {
                setIsGameOn(false);
                setGameIsOver(true);
            }
        }
        else{
            if(palavraJogo.every(l=>(newLetrasApertadas.includes(l)))){
                setIsGameOn(false);
                setGameIsOver(true);
            }
        }
    }
    return (
        <div className="Letras">
            {alfabeto.map((l) =>
                <button data-test="letter" onClick={() => VerifyPressedLetter(l)} disabled={isLetterDisabled(l) ? true : false} className={`Letra ${isLetterDisabled(l) ? "Desativada" : "Ativada"}`}>{l}</button>
            )}
        </div>
    )
}