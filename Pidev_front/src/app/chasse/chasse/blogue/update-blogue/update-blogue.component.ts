import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceBlogueService} from "../service/service-blogue.service";

@Component({
  selector: 'app-update-blogue',
  templateUrl: './update-blogue.component.html',
  styleUrls: ['./update-blogue.component.css']
})
export class UpdateBlogueComponent implements OnInit {
id:any
  blogue:any
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private serviceBlogue:ServiceBlogueService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    this.serviceBlogue.getBlogueById(this.id).subscribe((data)=>{
      this.blogue=data
    })
  }
  updateBlogue(f:any){
  return this.serviceBlogue.updateBlogue(this.id,f.value).subscribe(()=>{
    this.router.navigate(['/chasse/blogue'])
  })
  }

}
