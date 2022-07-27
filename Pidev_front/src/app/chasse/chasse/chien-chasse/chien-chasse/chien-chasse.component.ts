import { Component, OnInit } from '@angular/core';
import {ServiceChienChasseService} from "../services/service-chien-chasse.service";

@Component({
  selector: 'app-chien-chasse',
  templateUrl: './chien-chasse.component.html',
  styleUrls: ['./chien-chasse.component.css']
})
export class ChienChasseComponent implements OnInit {
  chienChasses:any
p:number=1
  limit:number=3
  total!:number
  constructor( private serviceChienChasse:ServiceChienChasseService) { }

  ngOnInit(): void {
    this.getChienChasse(this.p)
  }
  getChienChasse(p:number){

    this.serviceChienChasse.getChienChasse(p,this.limit).subscribe((data)=>{
      this.chienChasses= data
      console.log(data)
    })
  }
  getPage(p: number) {
    this.p = p;
    this.getChienChasse(this.p);
  }


}
