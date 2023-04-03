import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit{
  categories : Category[] = [];

  constructor(private categoryService:CategoryService,
              private router:Router){}
  
  ngOnInit(): void {
    this.getAllCategories();

  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      data=>{
        this.categories = data;
      },
      error=>{
        console.log(error);
      }
    )
  }
  //(click)="goToOrder(category.id)"
  goToOrder(id:any){
    this.router.navigateByUrl("/category/"+id);
  }
}
