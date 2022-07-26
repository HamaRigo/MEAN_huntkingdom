import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { DataService } from '../../../Services/Data.service';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  messageErr=""
  NgForm=NgForm ;
  constructor(private http: HttpClient,private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
    this.ds.adduser(data).subscribe(response=>{
      console.log(response)

      this.route.navigate(['/admin/allusers'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
      // console.log(err.status)
    })
  }
}
