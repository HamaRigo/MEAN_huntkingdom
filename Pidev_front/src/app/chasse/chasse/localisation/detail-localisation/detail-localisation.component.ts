import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../service/service-localisation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceGibierService} from "../../gibier/service/service-gibier.service";

@Component({
  selector: 'app-detail-localisation',
  templateUrl: './detail-localisation.component.html',
  styleUrls: ['./detail-localisation.component.css']
})
export class DetailLocalisationComponent implements OnInit {
id:any
  localisation:any
  especes:any
  gibier:any

  constructor(private serviceLocalisation:ServiceLocalisationService,private router:Router,
              private activatedRoute:ActivatedRoute,private serviceGibier:ServiceGibierService) {

  }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceLocalisation.getLocalisationById(this.id).subscribe((data)=>{
      this.localisation=data
    })
    this.serviceLocalisation.getEspecesByLocation(this.id).subscribe((data)=>{
      this.especes=data
    })
    this.serviceGibier.getAllEspeceChasse().subscribe((data2)=>{
      this.gibier=data2
    })
  }
update(id:any){
  this.router.navigate(['/admin/chasse/localisation/updateLocalisation/'+id])
}
delete(id:any){
  this.serviceLocalisation.removeLocalisation(id).subscribe(()=>{
    this.router.navigate(['/admin/chasse/localisation'])
  })
}
  addNewEspeces(f:any){
  console.log(f.value)
    console.log(this.localisation.nom)
    this.serviceLocalisation.postNewEpeceByLocalisation(this.localisation.nom,f.value.espece).subscribe(()=>{
      this.router.navigate(['/admin/chasse/localisation'])
    })
    this.router.navigate(['/admin/chasse/localisation'])
  }
  getMap(lng:any,lat:any){
    this.router.navigate(['/admin/chasse/localisation/mapLocation/'+lng+'/'+lat])
  }
}
