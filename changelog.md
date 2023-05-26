## [1.1.1] - 2023-05-03

### Added

- new project (ng new shop)
- first component (ng generate component first) and several properties in it, displayed them in template via {{}}
- product component, product-list component, *ngFor directive
- cart-list component, *ngIf directive


## [1.1.2] - 2023-05-24 - 2023-05-26

### Added
- added separte modules for cart, products, shared (ng generate module cart)
- added @Input() product and passed it's value from product-list via 
                                                <app-product *ngFor="let product of products" [product="product"><app-product>
- added @Output productAdedToCartEvent and passed it to parent template via (productAdedToCartEvent)="onAddToCart($event)"
- added @Outputs quantityIncrease, quantityDecrease, deleteItem and according methods in Cart service
- added template reference #appTitle and declared it via (@ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>), assigned it in method ngAfterViewInit()
- added highlight directive via @HostListener


