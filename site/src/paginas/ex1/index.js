import { useState } from "react";
import './index.scss'

export default function CalcularAçai() {
    const [pequeno, setPequeno] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState (0);
    const [desconto, setDesconto] = useState(0);
    const [resultado, setResultado] = useState(0);


    function calcAçai(){
   let a = pequeno * 13.5 + medio * 15 + grande * 17.5;
    let b = a - (a * (desconto/100));
   setResultado(b);
 


}

    return(
        <section className="page-acai">
            
            <section className="açai">
            <h1 className="texto1"> Açai</h1>
            
            <div> Açai pequeno: <input className="input" type="number" value={pequeno} onChange={e => setPequeno(Number(e.target.value))}></input> </div>
            <div> Açai médio: <input className="input" type="number" value={medio} onChange={e => setMedio(Number(e.target.value))}></input> </div>
            <div> Açai grande: <input  className="input" type="number" value={grande} onChange={e => setGrande(Number(e.target.value))}></input> </div>
            <div> Açai desconto: <input  className="input" type="number" value={desconto} onChange={e => setDesconto(Number(e.target.value))}></input> </div>
            <div>  {resultado} </div>

            <button className="botao" onClick={calcAçai}> Calcular </button>
            
            </section>
            
        </section>
    )
}