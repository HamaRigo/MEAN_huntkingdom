import { Component, OnInit } from '@angular/core';
import {ServiceGibierService} from "../service/service-gibier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-gibier',
  templateUrl: './add-gibier.component.html',
  styleUrls: ['./add-gibier.component.css']
})
export class AddGibierComponent implements OnInit {

  constructor(private serviceGibier:ServiceGibierService,private router:Router) { }

  ngOnInit(): void {
  }
  addGibier(f:any){
    this.serviceGibier.postEspeceChasse(f.value).subscribe(()=>{
      this.router.navigate(['/admin/chasse/gibier'])
    })
  }

}
