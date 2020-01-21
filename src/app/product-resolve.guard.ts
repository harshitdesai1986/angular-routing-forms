import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<Product> {

  constructor(private productService: ProductService) { }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.productService.getProducts();
  }
}
