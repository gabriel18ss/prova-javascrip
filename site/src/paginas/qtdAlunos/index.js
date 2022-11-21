import './index.scss'

import { useState } from 'react';
export default function QtdAluno(){

    const [QtdAlunos, setQtdAlunlos] = useState('');
    const [Notas, setNotas] = useState('');
    const [Input, setInput] = useState('');
    const [Media, setMedia] = useState('');
    


    function Alunos(){
         
        let a = []
        for(let cont = 1; cont <= QtdAlunos; cont++){
            a.push(cont)
            setInput(a);
        }
    }
    
    function CalcularMedia(){

    }
    function MaiorNota(){

    }

    function MenorNota(){
        
    }



    return(
        <section>
            <div>
                <h1 className='C-M'>Calcular Media</h1>
            </div>
            <div className='caixa-1'>
                <input type="text" placeholder='Informe a qtd de alunos:' />
                <button>OK</button>
            </div>
            <div>
                <input type="text" placeholder='Aluno 1:' />
                <input type="text" placeholder='Aluno 2:' />
            </div>
            <div>
                <input type="text" placeholder='Media:' />
                <input type="text" placeholder='Maior:' />
                <input type="text" placeholder='Menor:' />
            </div>
        </section>
    )
}