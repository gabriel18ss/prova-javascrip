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