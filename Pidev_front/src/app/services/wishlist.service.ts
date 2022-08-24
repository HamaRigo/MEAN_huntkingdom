import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { wishlistUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {

    return this.http.get(wishlistUrl).pipe(
        map((result: any) => {
          let productIds:any = [];

          result.forEach((item: any) => productIds.push(item).id);

          return productIds;
        })
    )
  }

  addToWishlist(productId: any) {
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId: string) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
