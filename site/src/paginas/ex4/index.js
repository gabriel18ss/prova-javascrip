import { useState } from "react";
import './index.scss';


export default function CalcularSalario(){
    
    const [salario, setSalario] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [bonus, setBonus] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcSalario(){
       let a = (salario - (desconto/100) ) + bonus
        setResultado(a);
    }


    return(
        

        <section className="salario">
        <h1 className="texto1">Salario</h1>
         <div> Salario: <input className="input" type="number" value={salario} onChange={e => setSalario(Number(e.target.value))}></input></div>
         <div> Desconto: <input className="input" type="number" value={desconto} onChange={e => setDesconto(Number(e.target.value))}></input> </div>
         <div> Bonus: <input className="input" type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}></input> </div>
         <button className="botao1" onClick={calcSalario}>Calcular</button>
         <div>  {resultado} </div>

         
            </section>  
        )
 

}