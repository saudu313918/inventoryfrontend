import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../app/product/product.component'
import { ProductdetailsComponent } from "../app/product/productdetails/productdetails.component";

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '/product', component: ProductComponent},
  { path:'/productdetails',component: ProductdetailsComponent }
  
];