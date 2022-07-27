import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../../../../chasse/chasse/localisation/service/service-localisation.service";
import {ActivatedRoute} from "@angular/router";
import {Loader} from "@googlemaps/js-api-loader";

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
