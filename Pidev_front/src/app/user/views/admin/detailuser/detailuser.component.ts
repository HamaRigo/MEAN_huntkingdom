import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../Services/Data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {
  id:any
  datauser:any
  dataArray: any = []
  messageSuccess = ''

  constructor(private aroute:ActivatedRoute,private ds:DataService) {
    this.aroute.params.subscribe(data=>this.id= data['id'])
  }
  // constructor() { }

  ngOnInit(): void {
    this.ds.getOneuser(this.id).subscribe(data=>{
      console.log(data)
      this.datauser=data
    })

  }
  delete(id: any) {

    this.ds.deleteuser(id).subscribe(response => {
      console.log(response)
      this.dataArray.id

    })

  }


}
