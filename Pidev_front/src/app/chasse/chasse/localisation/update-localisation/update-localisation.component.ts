import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../service/service-localisation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-localisation',
  templateUrl: './update-localisation.component.html',
  styleUrls: ['./update-localisation.component.css']
})
export class UpdateLocalisationComponent implements OnInit {
id:any
  localisation:any
  constructor(private serviceLocalisation:ServiceLocalisationService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceLocalisation.getLocalisationById(this.id).subscribe((data)=>{
      this.localisation=data
    })
  }
  updateLocalisation(f:any){
  return this.serviceLocalisation.updateLocalisation(this.id,f.value).subscribe(()=>{
    this.router.navigate(['/admin/chasse/localisation'])
  })
  }

}
