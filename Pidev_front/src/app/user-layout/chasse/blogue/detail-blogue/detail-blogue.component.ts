import { Component, OnInit } from '@angular/core';
import {ServiceBlogueService} from "../../../../chasse/chasse/blogue/service/service-blogue.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-blogue',
  templateUrl: './detail-blogue.component.html',
  styleUrls: ['./detail-blogue.component.css']
})
export class DetailBlogueComponent implements OnInit {
  id:any
  blogue:any
  constructor(private serviceBlogue:ServiceBlogueService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    this.serviceBlogue.getBlogueById(this.id).subscribe((data)=>{
      this.blogue=data
    })
  }
  update(id:any){
    this.router.navigate(['chasse/blogue/updateBlogue/'+id])
  }
  delete(id:any){
    this.serviceBlogue.removeBlogue(id).subscribe(()=>{
      this.router.navigate(['/chasse/blogue'])
    })
  }
}
