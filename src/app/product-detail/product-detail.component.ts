import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product(-1, 'No Product');
  newText: string = "";

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(id => {
      this.productService.getProduct(id).subscribe((product: Product) => {
        this.product = product;
      })
    });
  }

  canExit(): boolean {
    if (this.newText === "") {
      let response = window.confirm('Sure you want to exit?')
      return response;
    } else {
      return true;
    }
  }

}
