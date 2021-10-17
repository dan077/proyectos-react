import React from 'react'
import PropTypes from 'prop-types'
import Loading from "./Loading";
const FormularioBuscador = ({handleSubmit, StatusLoading}) => {
    console.log(StatusLoading);
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 my-3 row align-items-center">
                <div className="col-auto">
                    <label className="form-label text-center">Buscar</label>
                </div>

                <div className="col-auto">
                    <input
                        type="search"
                        className="form-control"
                        name="search"
                        aria-describedby="emailHelp"
                    />
                </div>
                {StatusLoading && <Loading />}
            </div>
        </form>
    );
};

FormularioBuscador.propTypes = {
    handleSubmit: PropTypes.func,
    StatusLoading: PropTypes.bool
};

export default FormularioBuscador
