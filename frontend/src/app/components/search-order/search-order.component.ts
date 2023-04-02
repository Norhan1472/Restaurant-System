import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit{
 
  constructor(private router:Router){}
  
  ngOnInit(): void {

  }

  searching(key:string){
    this.router.navigateByUrl("category/"+key);
  }

}
