import React from 'react'
import PropTypes from 'prop-types'
import { Operaciones } from '../helpers/operaciones';

const NumberInput = ({setNumeros,numeros}) => {
    
    const {numero1,numero2} = numeros;
    const {handleChange} = Operaciones(numeros,setNumeros)

    return (
        <>
            <label>
                numero1:
                <input name = "numero1" value={numero1} onChange={handleChange}  type="number" />
            </label>
            <label>
                numero2:
                <input name = "numero2" value={numero2} onChange={handleChange} type="number" />
            </label>
        </>
    )
}

NumberInput.propTypes = {
setNumeros: PropTypes.func,
numeros: PropTypes.object,
}

export default NumberInput;
