import React from 'react'
import PropTypes from 'prop-types'

const desc_reserva = ({dias,proveedor}) => {
    return (
        <div>
            <h2>Precio: </h2>
        </div>
    )
}

desc_reserva.propTypes = 
{
    dias = PropTypes.number,
    proveedor = PropTypes.object,
}

export default desc_reserva
