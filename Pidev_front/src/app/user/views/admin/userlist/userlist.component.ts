import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from '../../../Services/Data.service';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  dataArray: any = []

  datauser = {
    first_name: '',
    last_name: '',
    email: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    id: '',
  }

  messageSuccess = ''

  constructor(private ds: DataService, private route: Router) {

    this.ds.getAllusers().subscribe(data => {
      console.log('data' + data)
      this.dataArray = data
    })

  }

  ngOnInit(): void {
  }


  delete(id: any, i: number) {

    this.ds.deleteuser(id).subscribe(response => {
      console.log(response)
      this.dataArray.splice(i, 1)

    })

  }


  getdata(firstname: string, lastname: string, createdAt: string, updatedAt: string, status: string, email: string, id: any) {
    this.messageSuccess = ''
    this.datauser.first_name = firstname
    this.datauser.last_name = lastname
    this.datauser.status = status
    this.datauser.createdAt = createdAt
    this.datauser.updatedAt = updatedAt
    this.datauser.email = email
    this.datauser.id = id
    console.log(this.datauser)

  }


  updatenewuser(f: any) {
    let data = f.value
    this.ds.updateuser(this.datauser.id, data).subscribe(response => {
      console.log(response)
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.datauser.id)

      this.dataArray[indexId].firstname = data.firstname
      this.dataArray[indexId].lastname = data.lastname
      this.dataArray[indexId].age = data.age
      this.dataArray[indexId].phone = data.phone
      this.dataArray[indexId].email = data.email


      this.messageSuccess = `this student ${this.dataArray[indexId].firstname} is updated`


    }, (err: HttpErrorResponse) => {
      console.log(err.message)

    })
  }


  details(id: any) {
    this.route.navigate(['/admin/detailuser/'+id])
  }


}
