import React, { useEffect, useState } from "react";
import Date_picker from "./Date_picker";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const Date_form = () => {
    const [selectedDateStart, handleDateStartChange] = useState(new Date());
    const [days, setDays] = useState(1);

    const selectedDateEnd = () => {
        let copyObject = new Date(selectedDateStart);
        copyObject.setDate(copyObject.getDate() + days);
        console.log(copyObject);
        return copyObject;
    };
    /**
     * Corregir error. cuando incrementa el día la fecha final no camnbia
     * Erro corregifo 16:52. debia usar una funcion y no un state... (seguié investigando)
     */

    const handleChange = (e) => {
        let _days = parseInt(e.target.value);
        setDays(_days);
        //handleChangeEnd();
        console.log(_days);
    };

    return (
        <Card>
            <Card.Header>Reserva</Card.Header>
            <Card.Body className="bg-light">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="d-flex justify-content-center">
                        <Date_picker
                            value={selectedDateStart}
                            onChange={handleDateStartChange}
                            title="Fecha inicio"
                            readOnly={false}
                        />
                        <InputGroup
                            className="mb-3"
                            style={{
                                width: "21%",
                                marginRight: "3%",
                                marginLeft: "3%",
                            }}
                        >
                            <InputGroup.Text id="basic-addon1">
                                Días
                            </InputGroup.Text>
                            <FormControl
                                value={days}
                                size="sm"
                                type="number"
                                name="days"
                                min="1"
                                aria-describedby="basic-addon1"
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <Date_picker
                            value={selectedDateEnd()}
                            //onChange={handleDateEndChange}
                            title="Fecha fin"
                            readOnly={true}
                        />
                    </div>
                </MuiPickersUtilsProvider>
                <div className="d-grid gap-2 col-6 mx-auto mt-2">
                    <Button variant="info" className="block-center ">
                        Reservar
                    </Button>
                </div>
                {/* Faltan seleccionar el proveedor para poder dar un preico */}
            </Card.Body>
        </Card>
    );
};

export default Date_form;
