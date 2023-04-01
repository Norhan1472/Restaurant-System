export class Category {
    id!: number;
    name!: string;
    categoryLogo!:string;
    createdDate!: Date;
    updatedDate!: Date;

    constructor(id:number,name:string,categoryLogo:string,
        createdDate:Date,updatedDate:Date){
            this.id=id;
            this.name=name;
            this.categoryLogo=categoryLogo;
            this.createdDate=createdDate;
            this.updatedDate=updatedDate;
        }
}
