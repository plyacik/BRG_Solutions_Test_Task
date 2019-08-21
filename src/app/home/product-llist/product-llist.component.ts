import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/share/product.service';

@Component({
  selector: 'app-product-llist',
  templateUrl: './product-llist.component.html',
  styles: []
})
export class ProductLlistComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts();
  }

}
