import { useState } from "react";
import './index.scss'

export default function CalcularCinema() { 
    const [inteira, setInteira] = useState(0);
    const [meia, setMeia] = useState(0);
    const [diaSemana, setDiaSemana] = useState(" ");
    const [nacional, setNacional] = useState(" ");
    const [resultado, setResultado] = useState(0);

    function cinemaIngressos() {
        let total;

     if(nacional === "brasileiro")
     {
        total = (inteira + meia) * 5
     }
     else if(diaSemana === "quarta") {
        total = (inteira + meia) * 14.25
     }
     else {
        total = inteira * 28.50 + meia * 14.25
     }

     setResultado(total)
    }

    return (

      <section className="cinema">
        <h1 className="texto1"> Cinema </h1>
        <div> informe o dia:  <input className="input" type="text" value={diaSemana} onChange={e => setDiaSemana(e.target.value)}></input> </div>
        <div> informe a nacionalidade :  <input className="input" type="text" value={nacional} onChange={e => setNacional(e.target.value)}></input> </div>
        <div> informe as quantidade de inteiras:  <input className="input" type="text" value={inteira} onChange={e => setInteira(Number(e.target.value))}></input> </div>
        <div> informe as quantidade de meias:  <input className="input" type="text" value={meia} onChange={e => setMeia(Number(e.target.value))}></input> </div>

        <button className="botao1" onClick={cinemaIngressos}>Calcular</button>
        <div>  O total é de R$: {resultado}</div>
      </section>
    )

}