export default function Letras({ alfabeto,isGameOn }) {
    return (
        <div className="Letras">
            {alfabeto.map((l) => 
                <button disabled={!isGameOn} className={`Letra ${isGameOn?"Ativada":"Desativada"}`}>{l}</button>
            )}
        </div>
    )
}