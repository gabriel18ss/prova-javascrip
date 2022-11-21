import { useState } from "react";
import './index.scss';

export default function CalcularGramas() {
    const [gramas, setGramas] = useState(0);
    const [resultado, setResultado] = useState(0);


    function calcGramas(){
   let a = 0.035;
   let b = a * gramas

   let c = 0.030;
   let d = c * gramas;

   if(gramas < 0){
    return setResultado("Peso invalido")
   }
   setResultado(b);

   if(gramas > 1000){
   setResultado(d)
   }
 


}

    return(

           <section className="sorvete">
           <h1 className="texto1"> Sorvete</h1>

          <div> Informe a quantidade de Gramas: <input className="input" type="number" value={gramas} onChange={e => setGramas(Number(e.target.value))}></input> </div>
          <button className="botao1" onClick={calcGramas}> Calcular </button>
          <div> O sorverte deu R$: {resultado} </div>
           </section>
    )
}