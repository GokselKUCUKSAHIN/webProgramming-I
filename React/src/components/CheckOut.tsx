import React, {SyntheticEvent, useRef, useState} from "react";
import ItemCount from "./ItemCount";
import {getCoupon} from "./GetCoupon";
import CheckOutList from "./CheckOutList";
import {calculateItemCount} from "./Pricing";
import {Discount} from "../interfaces/Discount";
import {ShoppingCartItem} from "../interfaces/ShoppingCartItem";

export interface CheckOutProp {
    shoppingCart: ShoppingCartItem[]
}

function CheckOut({shoppingCart}: CheckOutProp) {
    const [coupon, setCoupon] = useState<Discount>({text: "null", amount: 0});
    const couponInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e?: SyntheticEvent) {
        const inputText = couponInputRef.current?.value;
        if (inputText !== undefined) {
            const discount = getCoupon(inputText);
            setCoupon(discount);
        }
    }

    return (
        <div className="col-md-5 col-lg-4 order-md-last">
            <ItemCount itemCount={calculateItemCount(shoppingCart)}/>
            <CheckOutList shoppingCart={shoppingCart} discount={coupon}/>
            <form className="card p-2">
                <div className="input-group">
                    <input
                        ref={couponInputRef}
                        type="text"
                        className="form-control"
                        placeholder="indirim kuponu"
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleSubmit();
                            }
                        }}
                    />
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="btn btn-secondary">
                        Kupon gir
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckOut;