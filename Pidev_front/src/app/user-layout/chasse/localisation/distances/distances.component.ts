import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../../../../chasse/chasse/localisation/service/service-localisation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-distances',
  templateUrl: './distances.component.html',
  styleUrls: ['./distances.component.css']
})
export class DistancesComponent implements OnInit {


  lat:any
  lng:any
  distances:any
  constructor(private serviceLocalisation:ServiceLocalisationService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.lng=this.activatedRoute.snapshot.params['lng']
    this.lat=this.activatedRoute.snapshot.params['lat']

    this.serviceLocalisation.getDistance(this.lng,this.lat).subscribe((data)=>{
      this.distances=data
      console.log(this.distances)
    })
  }

}
