import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../../../../chasse/chasse/localisation/service/service-localisation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
  localisation:any
  lat:any
  lng:any
  p:number=1
  limit:number=3
  total!:number

  constructor(private serviceLocalisation:ServiceLocalisationService,private route:Router) { }

  ngOnInit(): void {
    this.getLocalisation(this.p)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        this.lng=position.coords.longitude
        this.lat=position.coords.latitude

      },
      () => {
        alert('Position could not be determined.');
      }
    );

  }

  getLocalisation(p:number){

    this.serviceLocalisation.getLocalisation(p,this.limit).subscribe((data)=>{
      this.localisation= data
      console.log(data)
    })
  }
  getPage(p: number) {
    this.p = p;
    this.getLocalisation(this.p);
  }
  getDistance(){
    this.route.navigate(['/chasse/localisation/distance/'+this.lng+'/'+this.lat])

  }
}
