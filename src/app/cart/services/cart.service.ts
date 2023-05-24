
import { Injectable } from '@angular/core';
import { Category } from 'src/app/first/category.enum';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  
  getCartItems() {
    const items: ProductModel[] = [{id: 2, name: 'STAR BRITE Power Trim & Tilt Fluid', description: 'Machine oil', price: 500, category: Category.Automotive, isAvailable: false}];
    return items;
  }

  getTotalCost(){
    return this.getCartItems().reduce((sum: number, b: ProductModel) =>b.price, 0);
  }

  getTotalQuantity(){
    return this.getCartItems().length;
  }
}