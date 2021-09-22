import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Effect = () => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(10);


    //UseEffect no deberia usar funciones asincronas.
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json()) //espera la respuesta del fetch.
            .then((data) => {
                setUsers(data);
            }); //espera la respuesta del .json()
    }, []);

    useEffect(() => {
        console.log(userId)
    }, [userId]);

    console.log(users);
    console.log("hola");

    const handleSubmit = (e) => {
        e.preventDefault(); //evita el resfesh de la pagina.
        setUserId(0);
        console.log({
            name: "hola",
            email: "sdf@miWmail.com",
            password: "dfsdfsfd",
        });
    };

    return (
        <div>
            <h1>useEffect</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setUserId(e.target.value)} value={userId} type="text" placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr />
        </div>
    );
};

export default Effect;
