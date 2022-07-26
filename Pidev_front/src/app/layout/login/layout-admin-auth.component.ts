import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adminService } from 'src/app/user/Services/admin.service';

@Component({
  selector: 'app-layout-admin-auth',
  templateUrl: './layout-admin-auth.component.html',
  styleUrls: ['./layout-admin-auth.component.css']
})
export class LayoutAdminAuthComponent implements OnInit {
  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:adminService,private route:Router,private arouter:ActivatedRoute) {
    if(this.asd.LoggedIn()==true){
      this.route.navigate(['/admin/'])
    }else{
      this.route.navigate(['/'])
    }
  }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
    console.log(this.url)
  }

  loginadmin(f:any){
    let data=f.value

    this.asd.login(data).subscribe((response)=>
    {
      console.log(data)
      this.dataReceived=response
      this.asd.saveDataProfil(this.dataReceived.token)
      this.route.navigate([this.url])

    },err=>this.messageAuthError="invalid email and password")

  }

}

