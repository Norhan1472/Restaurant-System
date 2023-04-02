import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';

const routes: Routes = [
  {path:'order/:id',component:OrderDetailsComponent},
  {path:'category/:key',component:OrderItemsComponent},
  {path:'category/:id',component:OrderItemsComponent},
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
