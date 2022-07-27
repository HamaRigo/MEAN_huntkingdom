import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {DataService} from "../../../user/Services/Data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageErr=""
 // NgForm=NgForm ;
  constructor(private http: HttpClient,private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
    this.ds.adduser(data).subscribe(response=>{
      console.log(response)

      this.route.navigate(['/login'])

    },(err:HttpErrorResponse)=>{
      this.messageErr='Email & User name exist deja'
      // console.log(err.error)
      // console.log(err.status)
    })
  }
}
