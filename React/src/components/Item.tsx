import React from "react";
import {eventBus} from "./Pricing";

export interface ItemProp {
    name?: string,
    price?: number,
    unit?: string,
    description?: string,
    detail?: string
}

function Item({name, price, unit, description, detail}: ItemProp) {
    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{name}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">
                    {price}₺ <small className="text-muted">/ {unit}</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{description}</li>
                    <li>{detail}</li>
                </ul>
                <button
                    onClick={e => eventBus.emit("addItem", e, name, price, 1)}
                    type="button"
                    className="btn btn-lg btn-block btn-primary">
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
}

export default Item;