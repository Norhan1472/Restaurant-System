import { Address } from "./address";
import { Client } from "./client";
import { Item } from "./item";
import { RequestOrder } from "./request-order";

export class PurchaseRequest {
    client!:Client;
    requestOrder! :RequestOrder;
    fromAddress! :Address;
    toAddress!: Address;
    items! : Item[];
}
