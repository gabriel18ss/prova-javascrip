import { useState } from 'react'
import './index.scss'

export default function Cafe() {

    const [estudantes, setEstudantes] =useState(0)
    const [litros, setLitros] =useState(0)
    const [capacidade, setCapacidade] =useState(0)
    const [resul ,setResul] =useState(0)

    function CalcularCafe() {

         let aluninhos = (estudantes * litros)/1000;
         
        
         if (aluninhos <= capacidade)
         setResul (capacidade)
        
         else {
            for (let cafe = capacidade; cafe <= aluninhos; cafe +=capacidade) {
                let trasformador = cafe;
                let reposta = trasformador + capacidade ;
                let reposta2 = trasformador + (capacidade -1)
                   setResul(reposta)
                   if (capacidade === 1){
                    setResul(reposta2)
                   }
         }
        
         }

    
    }


    return(
        <main className='page-temperatura'>

            
            <section className='conteiner-1'>
                
            <h1 className='cu'>Quero cafe</h1>

            <label>Quantos alunos?</label>
            <input className="input" type="number" value={estudantes} onChange={e => setEstudantes(Number(e.target.value))}></input>
            <label>Quantos ml por aluno?</label>
            <input className="input" type="number" value={litros} onChange={e => setLitros(Number(e.target.value))}></input>
            <label>Quantos L capacidade?</label>
            <input className="input" type="number" value={capacidade} onChange={e => setCapacidade(Number(e.target.value))}></input>
            <button className='botao' onClick={CalcularCafe}>calcular cafe</button>
            <div> Serao neceessários {resul} Litros</div> 
            <img className='gaso' src='/cafe.jpg' alt='jaque'/>

            </section>
           
            
           
        </main>
    )
}