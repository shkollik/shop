
import { Injectable } from '@angular/core';
import { Category } from 'src/app/first/category.enum';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})

export class CartService {

  getCartItems() {
    // обычно у модели записи корзины есть доп поля, например, количество
    const items: ProductModel[] = [{id: 2, name: 'STAR BRITE Power Trim & Tilt Fluid', description: 'Machine oil', price: 500, category: Category.Automotive, isAvailable: false}];
    return items;
  }
}
