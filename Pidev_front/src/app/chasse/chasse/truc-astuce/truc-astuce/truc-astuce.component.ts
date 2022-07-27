import { Component, OnInit } from '@angular/core';
import {ServiceTrucAstuceService} from "../service/service-truc-astuce.service";

@Component({
  selector: 'app-truc-astuce',
  templateUrl: './truc-astuce.component.html',
  styleUrls: ['./truc-astuce.component.css']
})
export class TrucAstuceComponent implements OnInit {
 trucAstuce:any
  constructor( private serviceTrucAstuce:ServiceTrucAstuceService) { }

  ngOnInit(): void {
   this.serviceTrucAstuce.getTrucAstuce().subscribe((data)=>{
     this.trucAstuce=data
   })
  }

}
