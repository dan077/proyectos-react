import React from 'react'
import PropTypes from 'prop-types'

const Card = ({src}) => {
    return (
        <div
            className="col-lg-4 col-md-12 mb-4 mb-lg-0"
           
        >
            <img
                src={src}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="..."
            />
        </div>
    );
}

Card.propTypes = {
    src: PropTypes.string,
}

export default Card
