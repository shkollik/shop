import { Injectable } from '@angular/core';
import { Category } from "src/app/first/category.enum";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: 'root',
  })

export class ProductService{

    getProducts(){
        const products: ProductModel[] = [
            {id: 1, name: 'Logitech G PRO X Gaming Headset', description: 'Official League of Legends Edition', price: 3000, category: Category.Electronics, isAvailable: true, quantity: 100},
            {id: 2, name: 'STAR BRITE Power Trim & Tilt Fluid', description: 'Machine oil', price: 500, category: Category.Automotive, isAvailable: false, quantity: 0}
        ]

        return products;
    }
}