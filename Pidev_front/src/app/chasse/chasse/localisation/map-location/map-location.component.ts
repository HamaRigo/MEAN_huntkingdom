import {Component, Input, OnInit} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {ViewChild,ElementRef} from "@angular/core";
import {ServiceLocalisationService} from "../service/service-localisation.service";

import {ActivatedRoute} from "@angular/router";
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})
export class MapLocationComponent implements OnInit {
title="google-maps"
markers:any=[]
 map!: google.maps.Map
// document!:any
  constructor(private serviceLocation:ServiceLocalisationService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    var  location={
      lat:Number(this.router.snapshot.params['lat']),
      lng:Number(this.router.snapshot.params['lng'])

    };

  let  loader=new  Loader({
    apiKey:'AIzaSyCfCuqJE-1P0s6TNVmj7NvFOkoyksvLMVM'
  })
         loader.load().then(()=>{

      console.log(location)
      // @ts-ignore
      this.map=new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom:9,
      })
      var marker=new google.maps.Marker({
        position:location,
        map:this.map
      })

  })


  }


}
