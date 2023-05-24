import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: ProductModel){
    console.log(`${product.name} added to cart`);

  }




}
