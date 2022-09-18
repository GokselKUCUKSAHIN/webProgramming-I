import React, {useLayoutEffect, useState} from "react";
import {calculateTotalPrice, eventBus} from "./Pricing";
import {Discount} from "../interfaces/Discount";
import {ShoppingCartItem} from "../interfaces/ShoppingCartItem";

export interface CheckOutListProp {
    shoppingCart: ShoppingCartItem[];
    discount: Discount;
}

function renderShoppingCart(shoppingCart: ShoppingCartItem[]) {
    return shoppingCart.map((item, index) => item.quantity > 0 ? (
        <li className="list-group-item d-flex justify-content-between lh-sm"
            key={index}>
            <div>
                <h6 className="my-0">
                    {item.name} ({item.quantity}) {item.price}₺
                </h6>
            </div>
            <span
                style={{cursor: "pointer"}}
                className="w3-right w3-margin-right text-danger"
                onClick={e => eventBus.emit("removeItem", e, item)}>
                ×
            </span>
        </li>
    ) : "");
}

function renderDiscountUI(discount: Discount) {
    return discount.amount > 0 ? (
        <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
                <h6 className="my-0">İndirim kuponu</h6>
                <small>{discount.text}</small>
            </div>
            <span className="text-success">{discount.amount}₺</span>
        </li>
    ) : "";
}

function CheckOutList({shoppingCart, discount}: CheckOutListProp) {
    const [totalPrice, setTotalPrice] = useState(0);

    useLayoutEffect(() => {
        console.log("ShoppingCart Changed")
        setTotalPrice(calculateTotalPrice(shoppingCart, discount));
    }, [shoppingCart])

    useLayoutEffect(() => {
        console.log("Discount Changed");
        setTotalPrice(calculateTotalPrice(shoppingCart, discount));
    }, [discount]);


    return (
        <ul className="list-group mb-3">
            {renderShoppingCart(shoppingCart)}
            {renderDiscountUI(discount)}
            <li className="list-group-item d-flex justify-content-between">
                <span>Toplam Fiyat</span>
                <strong>{totalPrice}₺</strong>
            </li>
        </ul>
    )
}

export default CheckOutList;