import React from 'react'

const Contador = (props) => {
    const [contador,setContador] = React.useState(props.inicial);
    
    const aumentar = () => {
        setContador((actual) => actual+1);
    }

    const disminuir = () => {
        setContador(contador-1);
    }

    const reset = () => {
        setContador( () => {
           return props.inicial
        } );
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <hr />
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Contador;
