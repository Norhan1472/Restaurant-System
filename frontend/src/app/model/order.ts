export class Order {
    id!: number;
    name!: string;
    createdDate!: Date;
    updatedDate!: Date;
    img!:string;
    price!: number;
    description!: string;

    constructor(id:number,name:string,
        createdDate:Date,updatedDate:Date,
        img:string,price:number,
        description:string){
            this.id=id;
            this.name=name;
            this.createdDate=createdDate;
            this.updatedDate=updatedDate;
            this.img=img;
            this.price=price;
            this.description=description;
        }
}
