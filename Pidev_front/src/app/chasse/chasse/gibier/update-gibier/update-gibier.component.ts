import { Component, OnInit } from '@angular/core';
import {ServiceGibierService} from "../service/service-gibier.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-gibier',
  templateUrl: './update-gibier.component.html',
  styleUrls: ['./update-gibier.component.css']
})
export class UpdateGibierComponent implements OnInit {
id:any
  gibier:any
  constructor(private serviceGibier:ServiceGibierService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceGibier.getEspeceChasseById(this.id).subscribe((data)=>{
      this.gibier=data
    })
  }
  updateGibier(f:any){
  return this.serviceGibier.updateEspeceChasse(this.id,f.value).subscribe(()=>{
    this.router.navigate(['/admin/chasse/gibier'])
  })
  }

}
