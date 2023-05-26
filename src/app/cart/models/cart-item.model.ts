import { ProductModel } from "src/app/products/models/product.model";

export interface CartItem{
    id: number;
    product: ProductModel,
    quantity: number;
}