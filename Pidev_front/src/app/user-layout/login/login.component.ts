import { Component, OnInit } from '@angular/core';
import {adminService} from "../../user/Services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:adminService,private route:Router,private arouter:ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  loginadmin(f:any){
    let data=f.value

    this.asd.login(data).subscribe((response)=>
    {
      // console.log(data)
      this.dataReceived=response
      this.asd.saveDataProfil(this.dataReceived.token)
         if(this.asd.LoggedIn()) {

           if(this.asd.IsAdmin()) {
             this.route.navigate(['/admin/'])
           }else {
             this.route.navigate(['/']).then(() => {
               location.reload();
             });

           }
            }


    },err=>this.messageAuthError="invalid email and password")

  }
}
