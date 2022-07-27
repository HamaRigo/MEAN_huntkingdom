import { Component, OnInit } from '@angular/core';
import {ServiceTrucAstuceService} from "../service/service-truc-astuce.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-truc-astuce',
  templateUrl: './update-truc-astuce.component.html',
  styleUrls: ['./update-truc-astuce.component.css']
})
export class UpdateTrucAstuceComponent implements OnInit {
id:any
  trucAstuce:any
  constructor(private serviceTrucAstuce:ServiceTrucAstuceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceTrucAstuce.getTrucAstuceById(this.id).subscribe((data)=>{
      this.trucAstuce=data
    })
  }
updateTrucAstuce(f:any){
  return this.serviceTrucAstuce.updateTrucAstuce(this.id,f.value).subscribe(()=>{
    this.router.navigate(['/chasse/trucAstuce'])
  })
}
}
