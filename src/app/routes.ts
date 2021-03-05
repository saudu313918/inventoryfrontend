import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../app/product/product.component'
import { ProductdetailsComponent } from "../app/product/productdetails/productdetails.component";
import { SigninComponent } from './login/signin/signin.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'product', component: ProductComponent},
  { path:'productdetails/:id',component: ProductdetailsComponent },
  { path: 'login', component: SigninComponent}
  
];