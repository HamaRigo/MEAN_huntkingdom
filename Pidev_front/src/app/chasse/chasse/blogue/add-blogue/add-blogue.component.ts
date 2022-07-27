import { Component, OnInit } from '@angular/core';
import {ServiceBlogueService} from "../service/service-blogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-blogue',
  templateUrl: './add-blogue.component.html',
  styleUrls: ['./add-blogue.component.css']
})
export class AddBlogueComponent implements OnInit {

  constructor(private serviceBlogue:ServiceBlogueService,private router:Router) { }

  ngOnInit(): void {
  }
addBlogue(f:any){
    this.serviceBlogue.postBlogue(f.value).subscribe(()=>{
      this.router.navigate(['/chasse/blogue'])
    })
}
}
