import {useState} from 'react'
import NumberInput from './NumberInput';
import Resultado from './Resultado';

const Calculadora = () => {

    const [numeros, setNumeros] = useState({numero1:0,numero2:0})
    const operaciones = {
        "suma":"+",
        "resta":"-",
        "multiplicacion":"*",
        "division":"/",
    };
    
    return (
        <div>
            <NumberInput setNumeros = {setNumeros} numeros = {numeros} />

            {
            Object.entries(operaciones).map( 
                (array) => {
                    let key = array[0];
                    let value = array[1];
                    let expresion = `(${numeros.numero1})  ${value}  (${numeros.numero2})`;
                    //console.log(expresion)
                    let calculo = eval(expresion)
                    return <Resultado operacion={key} calculo = {calculo}/>
                })
            }
            
        </div>
    )
}

export default Calculadora
