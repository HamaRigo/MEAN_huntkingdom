import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import {productsUrl} from 'src/app/config/api';

import {Product} from 'src/app/models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    filtredProducts = new Subject<any[]>();
    $onFiltredProducts = new Observable<any[]>();

    constructor(private http: HttpClient) {

        this.$onFiltredProducts = this.filtredProducts;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("http://localhost:3000/produit/liste_produits");
    }

    getProductsPrice(from: number, to: number) {
        return this.http.get("http://localhost:3000/produit/liste_produits_prix/" + from + "/" + to);
    }

    setFilterdProduct(products: any) {
        this.filtredProducts.next(products)
    }
}
