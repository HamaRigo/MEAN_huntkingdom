import {Component, OnInit} from '@angular/core';
import {MessengerService} from "../../services/messenger.service";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product";
import {CartItem} from "../../models/cart-item";
import {Subscription} from "rxjs";
import {PanierService} from "../../services/panier.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartItems: any = [];
    cartTotal = 0;
    subscriptions: Subscription[];

    constructor(
        private msg: MessengerService,
        private cartService: CartService,
        private panierService: PanierService
    ) {

        const s1 = this.cartService.onCartListUpdate.subscribe((cart: any) => {

            this.cartItems = cart;
            this.calcCartTotal()
        });

        this.cartItems = this.cartService.getCartProducts()
        this.subscriptions = [s1];

    }

    ngOnInit() {
        //this.handleSubscription();
        // this.loadCartItems();
        this.calcCartTotal()
    }

    handleSubscription() {
        this.msg.getMsg().subscribe((product: Product) => {
            this.loadCartItems();
        });
    }

    loadCartItems() {
        this.cartService.getCartItems().subscribe((items: CartItem[]) => {
            this.cartItems = items;
            this.calcCartTotal();
        });
    }

    calcCartTotal() {
        this.cartTotal = 0;
        this.cartItems.forEach((item: { quantity: number; price: number; }) => {
            console.table(item.quantity)
            this.cartTotal += (item.quantity * item.price);
        });
    }


    resetCart() {
        this.cartService.resetCart();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe())
    }
    validepanier(){
        this.panierService.ajouterPAnier("62c2f130c0c223171f77f504","62c2f4fcdb66d79cbd9123be","62c234b46cb37a816fac5b49",this.cartItems).subscribe();
        this.cartService.resetCart();
    }
}
