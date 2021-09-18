import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const State = () => {
    const [temporizador,setTemporizador] = useState({
        t_i : 60,
        t_f : 55,
        t_a : 60,
    });
    console.log(temporizador)
    useEffect(
        //funcion,dependecias.
        ()=>{console.log("SOlo se ejecuta una sola vez. util para peticiones")},[]
    );
    const Temporizador = () => {
       let x = setInterval(()=>{
            temporizador.t_a -= 1;
            setTemporizador({
            ...temporizador
        })
        if(temporizador.t_a == temporizador.t_f){
            clearInterval(x);
        }
    
    },1000)
    }

    return (
        <div>
            <h1 className="text-center">UseState</h1>
            <hr />
            <p>Tiempo transcurrido: {temporizador.t_a}</p>
            <button onClick={Temporizador}>Iniciar Temporizador</button>
        </div>
    )
}


State.propTypes = {
    Tiempo_inicial : PropTypes.number,
    Tiempo_final : PropTypes.number,
}

export default State


