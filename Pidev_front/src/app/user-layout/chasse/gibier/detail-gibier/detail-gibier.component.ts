import { Component, OnInit } from '@angular/core';
import {ServiceGibierService} from "../../../../chasse/chasse/gibier/service/service-gibier.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceLocalisationService} from "../../../../chasse/chasse/localisation/service/service-localisation.service";

@Component({
  selector: 'app-detail-gibier',
  templateUrl: './detail-gibier.component.html',
  styleUrls: ['./detail-gibier.component.css']
})
export class DetailGibierComponent implements OnInit {
  id:any
  gibier:any
  localisation:any
  localisationAll:any
  constructor(private serviceGibier:ServiceGibierService,private router:Router,private activatedRoute:ActivatedRoute,
              private serviceLocalisation:ServiceLocalisationService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    this.serviceGibier.getEspeceChasseById(this.id).subscribe((data)=>{
      this.gibier=data
    })
    this.serviceGibier.getLocationByEspece(this.id).subscribe((data)=>{
      this.localisation=data
      console.log(data)
    })
    this.serviceLocalisation.getAllLocalisation().subscribe((data)=>{
      this.localisationAll=data
    })
  }
  update(id:any){
    this.router.navigate(['/chasse/gibier/updateGibier/'+id])
  }
  delete(id:any){
    this.serviceGibier.removeEspeceChasse(id).subscribe(()=>{
      this.router.navigate(['/chasse/gibier'])
    })
  }

}
