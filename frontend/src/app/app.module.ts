import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { DropdownCategoryComponent } from './components/dropdown-category/dropdown-category.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CartDataComponent } from './components/cart-data/cart-data.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownCategoryComponent,
    SearchOrderComponent,
    OrderDetailsComponent,
    CartDataComponent,
    PurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
