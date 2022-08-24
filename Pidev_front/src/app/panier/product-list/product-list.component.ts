import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {WishlistService} from "../../services/wishlist.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productList: Product[] = [];
    wishlist: number[] = [];

    constructor(
        private productService: ProductService,
        private wishlistService: WishlistService
    ) {
        this.productService.$onFiltredProducts.subscribe((products) => {
            this.productList = products;
        })
    }

    ngOnInit() {
        this.loadProducts();
        this.loadWishlist();
    }

    loadProducts() {
        this.productService.getProducts().subscribe((products) => {
            this.productList = products;

        })
    }

    loadWishlist() {
        this.wishlistService.getWishlist().subscribe(productIds => {
            this.wishlist = productIds
        })
    }

}
