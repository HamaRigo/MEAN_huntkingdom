import { Component, OnInit } from '@angular/core';
import {ServiceTrucAstuceService} from "../../../../chasse/chasse/truc-astuce/service/service-truc-astuce.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-truc-astuce',
  templateUrl: './detail-truc-astuce.component.html',
  styleUrls: ['./detail-truc-astuce.component.css']
})
export class DetailTrucAstuceComponent implements OnInit {
  id:any
  trucAstuce:any
  constructor(private serviceTrucAstuce:ServiceTrucAstuceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    this.serviceTrucAstuce.getTrucAstuceById(this.id).subscribe((data)=>{
      this.trucAstuce=data
    })
  }
  update(id:any){
    this.router.navigate(['/chasse/trucAstuce/updateAstuce/'+id])
  }
  delete(id:any){
    this.serviceTrucAstuce.removeTrucAstuce(id).subscribe(()=>{
      this.router.navigate(['/chasse/trucAstuce'])
    })
  }
}
