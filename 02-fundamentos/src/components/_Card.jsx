import React from 'react'
import { Button,Card } from 'react-bootstrap';
import "./_Card.css"
import PropTypes from 'prop-types';

const _Card = ({lang, img,fcolor,scolor}) => {
    return (
        
        <Card style={{background:`linear-gradient(to left ,${fcolor},${scolor})`}}>
        <Card.Img variant="top" className="rounded mx-auto d-block" src={img}/>
        <Card.Body>
            <Card.Title>{lang}</Card.Title>

            
        </Card.Body>
        </Card>
    )
}

_Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string
};

export default _Card
