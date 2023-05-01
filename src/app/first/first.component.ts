import { Component } from '@angular/core';
import { Category } from './category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name: string = "Samsung A 54";
  description: string = "Galaxy midrange smartphone";
  price: number = 22000;
  category: Category = Category.Electronics;
  isAvailable: boolean = true;
}
