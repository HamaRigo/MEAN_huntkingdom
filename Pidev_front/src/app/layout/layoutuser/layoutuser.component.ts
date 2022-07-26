import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layoutuser',
  templateUrl: './layoutuser.component.html',
  styleUrls: ['./layoutuser.component.css']
})
export class LayoutuserComponent implements OnInit {
  url:any
  constructor(private route:Router,private arouter:ActivatedRoute) {
    this.route.navigate(['/'])

  }

  ngOnInit(): void {
    // this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/'
    // console.log(this.url)
  }

}
