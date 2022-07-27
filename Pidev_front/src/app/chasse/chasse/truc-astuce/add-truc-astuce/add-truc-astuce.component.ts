import { Component, OnInit } from '@angular/core';
import {ServiceTrucAstuceService} from "../service/service-truc-astuce.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-truc-astuce',
  templateUrl: './add-truc-astuce.component.html',
  styleUrls: ['./add-truc-astuce.component.css']
})
export class AddTrucAstuceComponent implements OnInit {

  constructor(private serviceTrucAstuce:ServiceTrucAstuceService,private route:Router) { }

  ngOnInit(): void {
  }
 addTrucAstuce(f:any){
    this.serviceTrucAstuce.postTrucAstuceTrucAstuce(f.value).subscribe(()=>{
      this.route.navigate(['/chasse/trucAstuce'])
    })
 }
}
