import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { DropdownCategoryComponent } from './components/dropdown-category/dropdown-category.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [//Purchases
{path:'checkout',component:CheckoutComponent},
{path:'purchases',component:PurchasesComponent},
  {path:'order/:id',component:OrderDetailsComponent},
  {path:'category/:id',component:OrderItemsComponent},

  {path:'search/:key',component:OrderItemsComponent},
  {path:'allCategories',component:CategoryItemsComponent},
  {path:'allOrders',component:OrderItemsComponent},
  {path:'',redirectTo:'/allOrders',pathMatch:'full'},
  {path:'**',redirectTo:'/allOrders',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
