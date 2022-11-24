export default function Chute({isGameOn}){
    console.log(isGameOn)
    return(
        <div className="Chute">
            <div className="JaSeiAPalavra">
                Já sei a palavra!
            </div>
            <div>
                <input disabled={!isGameOn} className="InputChute"></input>
            </div>
            <div>
                <button className="BotaoChute">Chutar</button>
            </div>
        </div>
    )
}