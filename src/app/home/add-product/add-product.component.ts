import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/share/product-models';
import { ProductService } from 'src/app/share/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: []
})
export class AddProductComponent implements OnInit {

  productName: string;
  categoryId: number;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getCategories();
    this.productName = "";
    this.categoryId = 0;
  }

  onSubmit() {
    this.service.pushProduct(this.productName, this.categoryId).subscribe(
      (res: any) => {
        this.ngOnInit();
        this.service.getProducts();
        alert("New product added to list");
      },
      err => {
        alert(err.error.message);
      }
    );

  }

}
