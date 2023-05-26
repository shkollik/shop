import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input() item!: CartItem;
  @Input() quantity!: number;

  @Output() quantityIncrease = new EventEmitter<CartItem>();
  @Output() quantityDecrease = new EventEmitter<CartItem>();
  @Output() deleteItem = new EventEmitter<CartItem>();

  onQuantityIncrease() {
    this.quantityIncrease.emit(this.item);
  }

  onQuantityDecrease() {
    this.quantityDecrease.emit(this.item);
  }

  onDeleteItem() {
    this.deleteItem.emit(this.item);
  }
}