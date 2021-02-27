import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgForm } from "@angular/forms";
import { Product } from '../shared/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  

  constructor(public service: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  onSubmit(form: NgForm){
      this.service.postProduct().subscribe(
        res =>{
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','Product Added');
        },
        err => { 
          this.toastr.error('Something Went Wrong','Error!!!');
         }
      );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new Product();
  }
  

}
