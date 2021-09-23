import React, { Fragment, useState } from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const materialTheme = createTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "#33abb6",
            },
        },
        MuiPickersDay: {
            day: {
                color: "black",
            },
            daySelected: {
                backgroundColor: "#33abb6",
            },
            dayDisabled: {
                color: "#ccc",
            },
            current: {
                color: "#61b0b8",
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: "#33abb6",
                backgroundColor: "#33abb6",
            },
        },
    },
});

const Date_picker = ({ value, onChange, title, readOnly }) => {
    if (readOnly) {
        return (
            <Fragment>
                <ThemeProvider theme={materialTheme}>
                    <KeyboardDatePicker
                        disabled
                        variant="inline"
                        inputVariant="standard"
                        label={title}
                        format="dd/MM/yyyy"
                        value={value}
                        InputAdornmentProps={{ position: "start" }}
                        onChange={onChange}
                        theme={materialTheme}
                    />
                </ThemeProvider>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <ThemeProvider theme={materialTheme}>
                    <KeyboardDatePicker
                        autoOk
                        disablePast={true}
                        variant="inline"
                        inputVariant="standard"
                        label={title}
                        format="dd/MM/yyyy"
                        value={value}
                        InputAdornmentProps={{ position: "start" }}
                        onChange={onChange}
                        theme={materialTheme}
                    />
                </ThemeProvider>
            </Fragment>
        );
    }
};

Date_picker.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    title: PropTypes.string,
    readOnly: PropTypes.bool,
};

export default Date_picker;
