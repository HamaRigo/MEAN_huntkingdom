import { Component, OnInit } from '@angular/core';
import {ServiceBlogueService} from "../../../../chasse/chasse/blogue/service/service-blogue.service";

@Component({
  selector: 'app-blogue',
  templateUrl: './blogue.component.html',
  styleUrls: ['./blogue.component.css']
})
export class BlogueComponent implements OnInit {
  blogue:any
  constructor(private serviceBlogue:ServiceBlogueService) { }

  ngOnInit(): void {
    this.serviceBlogue.getBlogue().subscribe((data)=>{
      this.blogue=data
    })
  }
}
