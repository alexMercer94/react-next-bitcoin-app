import React from 'react';

const Price = props => {
    const { price, percent_change_1h, percent_change_7d, percent_change_24h } = props.precio;

    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Precio del Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio Actual: $ {price}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">última Hora: </span>
                        {percent_change_1h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">últimas 24 Horas: </span>
                        {percent_change_24h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">últimos 7 Días: </span>
                        {percent_change_7d} %
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Price;
