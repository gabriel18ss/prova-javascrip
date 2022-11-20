import { useState } from "react";
import './index.scss'

export default function CalcularParadas(){
    const [km, setKm] = useState(0);
    const [tanque, setTanque] = useState(0);
    const [consumo, setConsumo] = useState(0)
    const [resultado, setResultado] = useState(0)

    function numerodeParadas(){
       let a = km / consumo / tanque;
       
        setResultado(Math.ceil (a));
       
       
       
     
    }


    return(
         <section className="paradas">
         <h2> Calcular Paradas</h2>
         <div> Km Totais: <input className="input" type="number" value={km} onChange={e => setKm(Number(e.target.value))}></input> </div>
         <div> Capacidade do Tanque: <input  className="input" type="number" value={tanque} onChange={e => setTanque(Number(e.target.value))}></input> </div>
         <div> Km por Litros:  <input  className="input" type="number" value={consumo} onChange={e => setConsumo(Number(e.target.value))}></input> </div>
         <button className="botao1" onClick={numerodeParadas}>Calcular</button>
         <div className="resposta"> Serão necessarios:  {resultado} Paradas </div>
         </section>
        )
 

  }