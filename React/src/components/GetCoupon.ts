import {Discount} from "../interfaces/Discount";

export function getCoupon(name: string): Discount {
    let amount = 0;
    switch (name.toLowerCase()) {
        case "büyük berke indirimi":
            amount = 420;
            break;
        case "hello world":
            amount = 42;
            break;
        case "erü":
            amount = 69;
            break;
    }
    return {text: name, amount};
}