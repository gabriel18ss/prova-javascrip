import { useState } from "react";
import './index.scss'

export default function VereficarLibra(){
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState(0);
    const [resultado, setResultado] = useState('')

  function libra(){
   if((mes === "setembro" && dia >= 23 && dia <=30 || (mes === "outubro" && dia >= 1 && dia <=22 )))
  {
    return setResultado("É libra")
  }
  else{
    return setResultado ("Não é libra")
  }

   
  }

   
    return(
        <section className="libra">
        <h1 className="texto1">Signos</h1>
        <div> Informe o Mes:  <input className="input" type="text" value={mes} onChange={e => setMes(e.target.value)}></input> </div>
        <div> Informe o Dia:  <input className="input" type="number" value={dia} onChange={e => setDia(Number(e.target.value))}></input> </div>
        <button className="botao1" onClick={libra}>Vereficar</button>
        <div>  {resultado} </div>
        </section> 
        
    )
}