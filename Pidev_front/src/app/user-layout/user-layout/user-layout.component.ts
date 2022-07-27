import { Component, OnInit } from '@angular/core';
import {adminService} from "../../user/Services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
   logged : any
  constructor(private asd:adminService,private route:Router) {

  }

  ngOnInit(): void {
      this.logged =     this.asd.LoggedIn()
  }
    logout(){
        localStorage.removeItem('token')
        this.route.navigate(['/']).then(() => {
            location.reload();
        });
    }
}
