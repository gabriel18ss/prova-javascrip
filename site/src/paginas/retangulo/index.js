import { useState } from "react";
import './index.scss';

export default function Retangulo(){
   const [base, setBase] = useState (0)
   const [altura, setAltura] = useState(0);
   const [resul, setResul] = useState(0);

   
  
  
   let retangulo = [];
   let array = []
   let linhaRetangulo = '';
   
   
    function desenharAsteristico(){
        for (let coluna = 1; coluna <= altura; coluna++) {
            for (let linha = 1; linha <= base; linha++) {
                linhaRetangulo += '★'
            }
            retangulo.push(linhaRetangulo)
            linhaRetangulo = '\n'
            setResul(retangulo)
        }
    }

    function desenharCirculo(){
        for (let coluna = 1; coluna <= altura; coluna++) {
            for (let linha = 1; linha <= base; linha++) {
                linhaRetangulo += '○'
            }
            retangulo.push(linhaRetangulo)
            linhaRetangulo = '\n'
            setResul(retangulo)
        }
    }

    function desenharQuadrado(){
        for (let coluna = 1; coluna <= altura; coluna++) {
            for (let linha = 1; linha <= base; linha++) {
                linhaRetangulo += '∎'
            }
            retangulo.push(linhaRetangulo)
            linhaRetangulo = '\n'
            setResul(retangulo)
        }
    }

     function desenharImagem(){
        let array = []
        let x = 0
        let z = 0
        
        for(x; x <base; x++){
            array [x] = '<img src ="/jaqueBrutal.jpg" alt="kk" width= "50" height = "50"; /> '
        }

        for (z; z< altura; z++ ){
            document.write(array);
        }
     }
     return(
        <main className="page-temperatura">
 
       <section className="conteiner-1">
      
       
       
       <h1>desenhar retangulo</h1>

       <div className="sub"> 
       <h2> <span className="cor1">★ Estrela</span> | <span className="cor2">○ circulo </span> | <span className="cor3">∎ Quadrado</span> | <span className="cor4"> img</span></h2>
       </div>
         <div> informe a base:  <input className="input" type="number" value={base} onChange={e => setBase(Number(e.target.value))}></input> </div>
         
         <div> informe a altura:  <input className="input" type="number" value={altura} onChange={e => setAltura(Number(e.target.value))}></input> </div>
         <div className="button">

         <button className="botao" onClick={desenharAsteristico}>Vereficar asteristico</button>
         <button className="botao" onClick={desenharCirculo}>Vereficar circulo</button>
         <button className="botao" onClick={desenharQuadrado}>Vereficar Quadrado</button>
         <button className="botao" onClick={desenharImagem}>Vereficar Imagem</button> 
         </div>
        
      
         <div className="resul">
           <div>{resul}</div> 
            </div> 
         
        
       </section>
        
 
        </main>)

  


     
    }

