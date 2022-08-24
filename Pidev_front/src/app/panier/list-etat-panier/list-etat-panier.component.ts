import {Component, OnInit} from '@angular/core';
import {EtatService} from "../../services/etat.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-list-etat-panier',
    templateUrl: './list-etat-panier.component.html',
    styleUrls: ['./list-etat-panier.component.css']
})
export class ListEtatPanierComponent implements OnInit {
    listeEtat: any;

    constructor(private etatService: EtatService) {
        this.etatService.listeEtats().subscribe(data => {
            this.listeEtat = data;
        });
    }

    ngOnInit(): void {
    }

    deleteEtat(id: string) {

        this.etatService.deleteEtat(id).subscribe();
        window.history.back()

    }
}
