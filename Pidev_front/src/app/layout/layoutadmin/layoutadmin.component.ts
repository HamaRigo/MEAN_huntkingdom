import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/user/Services/admin.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layoutadmin',
  templateUrl: './layoutadmin.component.html',
  styleUrls: ['./layoutadmin.component.css']
})
export class LayoutadminComponent implements OnInit {
  username:any

  constructor(private asd:adminService,private route:Router) {
    // this.username=this.asd.getUsername()
  //
  }
// constructor() {
// }
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }
}
