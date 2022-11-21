import { useState } from "react";
import './index.scss';

export default function VereficarTemperatura(){
    const [temperatura, setTemperatura] = useState('');
    const [resultado, setResultado] = useState('')

  function vereTemperatura(){
   if(temperatura >= 41 )
  {
    return setResultado("Hipertemia")
  }
  else if (temperatura >= 39.6 && temperatura < 41){
    return setResultado ("Febre alta")
  }

  else if (temperatura >= 37.6 && temperatura < 39.6){
    return setResultado ("Febre")
  }

  else if (temperatura >= 36 && temperatura < 37.6){
    return setResultado ("Normal")
  }

  else {
    return setResultado ("Hipotermia")
  }

 

   
  }

   
    return(
      <section className="temperatura">
      <h1 className="texto1">Temperatura</h1>
        <div> informe a temperatura:  <input className="input" type="number" value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}></input> </div>
        <button className="botao1" onClick={vereTemperatura}>Vereficar</button>
        <div>  {resultado} </div>
      </section>
      )
}