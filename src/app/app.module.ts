import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { SigninComponent } from './login/signin/signin.component';
import { appRoutes } from './routes';
import { ProductService } from '../app/shared/product.service';
import { SigninService } from "../app/shared/signin/login.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductdetailsComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [ProductService,
    SigninService],
  bootstrap: [AppComponent]
})

export class AppModule {}
