import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  trackByProducts(index: number, product: ProductModel) {
    return product.id;
  }

  getTotalCost(): Number {
    return this.cartService.getTotalCost();
  }

  getTotalQuantity(){
    return this.cartService.getTotalQuantity();
  }

  onQuantityIncrease(item: CartItem) {
    console.log('+1 item');
    this.cartService.addItem(item)
  }

  onQuantityDecrease(item: CartItem) {
    console.log('-1 item');
    this.cartService.decreaseItem(item)
  }

  onDeleteItem(item: CartItem) {
    console.log('item deleted');
    this.cartService.removeItem(item)
  } 
}