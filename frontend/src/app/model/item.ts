import { Cart } from "./cart";

export class Item {
    img!:string;
    quantity!:number;
    price!:number;

    constructor(order:Cart){
        this.img=order.img;
        this.price=order.price;
        this.quantity=order.quantity;
    }
}
