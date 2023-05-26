
import { Injectable } from '@angular/core';
import { Category } from 'src/app/first/category.enum';
import { ProductModel } from '../../products/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})

export class CartService { 

  private cartItems: CartItem[] = [
    { id: 1, product: {id: 2, name: 'STAR BRITE Power Trim & Tilt Fluid', description: 'Machine oil', price: 500, category: Category.Automotive, isAvailable: false, quantity: 1}, quantity: 1},
    { id:2, product: {id: 3, name: 'Polar Vantage M', description: 'Sprt watch', price: 9000, category: Category.Electronics, isAvailable: true, quantity: 5}, quantity: 1}
  ];

  getCartItems() {    
    return this.cartItems;
  }

  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  addItem(item: CartItem): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push(item);
    }
  }

  decreaseItem(item: CartItem): void{
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      if(this.cartItems[index].quantity > 1 ){
        this.cartItems[index].quantity -=1;
      }
      else{
        this.cartItems.splice(index, 1);
      }      
    }
  }

  removeItem(item: CartItem): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      } 
    }  
}