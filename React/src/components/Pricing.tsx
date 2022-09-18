import React, {useEffect, useState} from "react";
import {EventBus} from "../utils/EventBus";
import {Discount} from "../interfaces/Discount";
import {ShoppingCartItem} from "../interfaces/ShoppingCartItem";
import CheckOut from "./CheckOut";
import ItemContainer from "./ItemContainer";

export const eventBus = EventBus.create("Cart");

export function calculateItemCount(cart: ShoppingCartItem[]): number {
    return cart.map(item => item.quantity).reduce((a, c) => a + c);
}

export function calculateTotalPrice(cart: ShoppingCartItem[], discount?: Discount): number {
    let totalPrice = discount ? -discount.amount : 0;
    cart.forEach(item => totalPrice += item.price)
    return totalPrice < 0 ? 0 : totalPrice;
}

export function Pricing() {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>(
        [
            {name: "Domates", price: 6, quantity: 1},
            {name: "Çikolata", price: 5, quantity: 1},
        ]);

    useEffect(() => {
        // On Init
        eventBus.on("addItem", (e, args) => {
            console.log("Item Add Invoked");
            const [name, price, quantity] = args;
            setShoppingCart(prev => {
                const newList = prev.slice();
                let flag = false;
                newList.forEach(item => {
                    if (item.name === name) {
                        item.price += price;
                        item.quantity++;
                        flag = true;
                    }
                })
                if (!flag) {
                    newList.push({name, price, quantity});
                }
                return newList;
            });
        });
        eventBus.on("removeItem", (e, args) => {
            const [item]: [ShoppingCartItem] = args;
            setShoppingCart(prevState => {
                const newshoppingCart = prevState.slice();
                newshoppingCart.forEach(currentItem => {
                    if (currentItem.name === item.name) {
                        currentItem.price -= (item.price / item.quantity);
                        currentItem.quantity--;
                    }
                });
                return newshoppingCart;
            })
        })
    }, []);

    return (
        <div className="container">
            <ItemContainer/>
            <CheckOut shoppingCart={shoppingCart}/>
        </div>
    )
}

export default Pricing;


// const [itemCount, setItemCount] = useState<number>();
//
// useEffect(() => {
//     setItemCount(calculateItemCount(shoppingCart));
// }, [shoppingCart]);