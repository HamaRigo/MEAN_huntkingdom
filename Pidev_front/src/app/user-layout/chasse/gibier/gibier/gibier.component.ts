import { Component, OnInit } from '@angular/core';
import {ServiceGibierService} from "../../../../chasse/chasse/gibier/service/service-gibier.service";

@Component({
  selector: 'app-gibier',
  templateUrl: './gibier.component.html',
  styleUrls: ['./gibier.component.css']
})
export class GibierComponent implements OnInit {
  gibier:any
  p:number=1
  limit:number=3
  total!:number
  constructor(private serviceGibier:ServiceGibierService) { }

  ngOnInit(): void {
    this.getGibier(this.p)
  }
  getGibier(p:number){
    this.serviceGibier.getEspeceChasse(p,this.limit).subscribe((data)=>{
      this.gibier=data
    })
  } getPage(p: number) {
    this.p = p;
    this.getGibier(this.p);
  }

}
