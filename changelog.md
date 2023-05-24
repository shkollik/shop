## [1.1.1] - 2023-05-03

### Added

- new project (ng new shop)
- first component (ng generate component first) and several properties in it, displayed them in template via {{}}
- product component, product-list component, *ngFor directive
- cart-list component, *ngIf directive


## [1.1.1] - 2023-05-24

### Added
- added separte modules for cart, products (ng generate module cart)
- added folders orders, shared
- added @input() product and passed it's value from product-list via <app-product *ngFor="let product of products" [product]="product"></app-product>
