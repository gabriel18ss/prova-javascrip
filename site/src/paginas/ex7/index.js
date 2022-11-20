import { useState } from "react";
import './index.scss';

export default function VerificarOrçamento(){
    const [ganhos, setGanho] = useState('');
    const [gastos, setGastos] = useState('');
    const [resultado, setResultado] = useState('')
    

    

  function calcOrçamento(){

    let a = (ganhos/100) * 81;
    let b = (ganhos/100) * 51;
    let c = (ganhos/100) * 21;
    let d = (ganhos/100) * 0;

    let e = (ganhos/100) * 100
    let f = (ganhos/100) * 80;
    let g = (ganhos/100) * 50;
    let h = (ganhos/100) * 20;
  


   if(gastos > ganhos )
  {
    return setResultado("Orçamento comprometido! Hora de rever seus gastos!")
  }
  else if (gastos > a && gastos < e){
    return setResultado ("Cuidado, seu orçamento pode ficar comprometido!")
  }

  else if (gastos > b  && gastos < f){
    return setResultado ("Atenção, melhor conter os gastos!")
  }

  else if (gastos > c  && gastos < g){
    return setResultado ("Muito bem, seus gastos não ultrapassaram metade dos ganhos")
  }

  else if (gastos > d  && gastos < h){
    return setResultado ("Parabens")
  }

  

 

   
  }

   
    return(
      <section className="orçamento">
      <h1 className="texto1">Gastos</h1>
        <div> informe seus ganhos:  <input className="input" type="number" value={ganhos} onChange={e => setGanho(Number(e.target.value))}></input> </div>
        <div> informe seus gastos:  <input className="input" type="number" value={gastos} onChange={e => setGastos(Number(e.target.value))}></input> </div>
        <button className="botao1" onClick={calcOrçamento}>Vereficar</button>
        <div>  {resultado} </div>
      </section>
       

       )
}