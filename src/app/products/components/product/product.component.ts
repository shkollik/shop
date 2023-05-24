import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() productAdedToCartEvent = new EventEmitter<ProductModel>();

   onAddToCart(){
     console.log('item bought');
     this.productAdedToCartEvent.emit(this.product)
   }
}
