import { Component, OnInit } from '@angular/core';
import {ServiceChienChasseService} from "../services/service-chien-chasse.service";
import {ActivatedRoute, Router} from "@angular/router";
import {updatePlaceholderMap} from "@angular/compiler/src/render3/view/i18n/util";

@Component({
  selector: 'app-detail-chien-chasse',
  templateUrl: './detail-chien-chasse.component.html',
  styleUrls: ['./detail-chien-chasse.component.css']
})
export class DetailChienChasseComponent implements OnInit {
  id: any
  chienChasse:any

  constructor(private serviceChienChasse: ServiceChienChasseService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id)
    this.serviceChienChasse.getChienChasseById(this.id).subscribe((data) => {
      this.chienChasse = data

    })

  }

  update(id:any) {
    this.router.navigate(['/admin/chasse/chienChasse/updateChien/'+id])
  }
  delete(id:any){
    this.serviceChienChasse.removeChienChasse(id).subscribe(()=>{
      this.router.navigate(['/admin/chasse/chienChasse'])
    })
  }
}
