import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../app/product/product.component'
import { ProductdetailsComponent } from "../app/product/productdetails/productdetails.component";
import { SigninComponent } from './login/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '/login', component: SigninComponent },
  { path: '/product', component: ProductComponent},
  { path:'/productdetails', component: ProductdetailsComponent }
  
];