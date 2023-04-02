import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { DropdownCategoryComponent } from './components/dropdown-category/dropdown-category.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownCategoryComponent,
    SearchOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
