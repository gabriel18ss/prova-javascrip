
import './index.scss';
import { useState } from 'react';

export default function ContarI(){

        const[inicio, setInicio] = useState('');
        const[fim, setFim] = useState('');
        const[contar, setContar] = useState('');


    function contarA() {
        let cc = []

        for(let cont = inicio ; cont <= fim ; cont++)
            cc.push(cont)
            setContar(cc +'');
        
    }

    return(
        <section className='cont1'>
            <main>
                <img src="im.jpeg" alt="" />
            <h1>contar</h1>
            <input type="text"  value={inicio} onChange={e => setInicio(e.target.value)}  />
            <input type="text" value={fim} onChange={e => setFim(e.target.value)}  />
            <button onClick={contarA} className="butao">conta</button>
            </main>
             {contar}
        </section>
    
    )
}
import "./index.scss";

export default function NumerosNaturais() {

    function contarNaturais(inicio,fim){
        if(isNaN(inicio) || isNaN(fim)) throw new Error ('favor colocar numero :) ');
        for(let cont=inicio;cont< fim; cont++){
            console.log(cont);
        }
    }
    return(
        <section>

            <div>
                <h1 >Entrada</h1>
                <input onClick={contarNaturais} type="number" placeholder="digite aqui" />
            </div>
            <div>
                <h1>Saida</h1>
            </div>

        </section>
    )
}