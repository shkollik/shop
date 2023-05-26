import { Category } from "src/app/first/category.enum";

export interface ProductModel{
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    quantity: number;
}