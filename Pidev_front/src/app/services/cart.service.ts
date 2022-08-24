import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {CartItem} from '../models/cart-item';
import {cartUrl} from '../config/api';
import {Product} from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cartList = new Subject<any[]>();
    onCartListUpdate = new Observable<any[]>();
    cart: any[] = [];

    constructor(private http: HttpClient) {

        this.onCartListUpdate = this.cartList.asObservable();
    }

    getCartItems(): Observable<CartItem[]> {
        //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
        return this.http.get<CartItem[]>(cartUrl).pipe(
            map((result: any[]) => {
                let cartItems: CartItem[] = [];

                for (let item of result) {
                    let productExists = false

                    for (let i in cartItems) {
                        if (cartItems[i].productId === item.product.id) {
                            cartItems[i].quantity++
                            productExists = true
                            break;
                        }
                    }

                    if (!productExists) {
                        cartItems.push(new CartItem(item.id, item.product));
                    }
                }

                return cartItems;
            })
        );
    }


    addProductToCart(product: Product | undefined): Observable<any> {
        return this.http.post(cartUrl, {product});
    }

    handleAddProductToCart(product: any | undefined) {

        if (this.cart.some(p => p._id == product['_id'])) {
            this.cart = this.cart.map(p => p._id == product['_id'] ? {...p, quantity: p.quantity + 1} : p);
        } else {
            this.cart.push({
                ...product, quantity: 1,
                price: product?.prix,
                productName: product?.name
            })
        }
        console.log(this.cart[0]['_id'])
        let cartJSON = {products: this.cart};
        console.table(cartJSON);

        this.cartList.next(this.cart);
        localStorage.setItem('cart', JSON.stringify(cartJSON))
    }

    handleDeleteProductFromCart(product: Product | undefined) {
        let cartJSON: any = localStorage.getItem('cart');
        this.cart = this.cart.filter((p: Product) => p.id != product?.id);
        this.cartList.next(this.cart);
        if (cartJSON) {
            let parseCart = JSON.parse(cartJSON);
            parseCart.products = parseCart.products.filter((p: Product) => product?.id != p.id);
            localStorage.setItem('cart', JSON.stringify(parseCart))
        }
    }

    InitializeCart() {
        let cartJSON: any = localStorage.getItem('cart');

        if (cartJSON) {
            this.cart = JSON.parse(cartJSON).products
            console.table(this.cart);
            this.cartList.next(this.cart);
        }
    }

    resetCart() {
        localStorage.removeItem('cart');
        this.cart = [];
        this.cartList.next([])
    }

    getCartProducts() {
        return this.cart;
    }
}
