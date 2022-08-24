import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
    from: number = 0;
    to: number = 0;

    constructor(private productService: ProductService,) {


    }

    filter() {

        this.productService.getProductsPrice(this.from, this.to).subscribe((products) => {
            this.productService.setFilterdProduct(products)
        })
    }

    ngOnInit(): void {
    }

}
