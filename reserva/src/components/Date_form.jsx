import React, { useEffect, useState } from "react";
import Date_picker from "./Date_picker";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const Date_form = () => {
    const [selectedDateStart, handleDateStartChange] = useState(new Date());
    const [selectedDateEnd, handleDateEndChange] = useState(new Date());
    const [days, setDays] = useState(1);

    /**
     * Corregir error. cuando incrementa el día la fecha final no camnbia
     */
    useEffect(() => {
        handleChangeDateEnd(); //cuando cambie la fecha inicial
    }, [selectedDateStart]);

    const handleChangeDateEnd = () => {
        let copyObject = new Date(selectedDateStart);
        copyObject.setDate(copyObject.getDate() + days);
        handleDateEndChange(copyObject);
    };

    const handleChange = (e) => {
        let _days = parseInt(e.target.value);
        setDays(_days);
        handleChangeDateEnd();
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
                                min = "1"
                                aria-describedby="basic-addon1"
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <Date_picker
                            value={selectedDateEnd}
                            onChange={handleDateEndChange}
                            title="Fecha fin"
                            readOnly={true}
                        />
                    </div>
                </MuiPickersUtilsProvider>
                <Button
                    variant="primary"
                    className="d-flex justify-content-center"
                >
                    Reservar
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Date_form;
