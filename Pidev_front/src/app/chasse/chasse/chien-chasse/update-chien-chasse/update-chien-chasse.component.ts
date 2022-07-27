import { Component, OnInit } from '@angular/core';
import {ServiceChienChasseService} from "../services/service-chien-chasse.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-chien-chasse',
  templateUrl: './update-chien-chasse.component.html',
  styleUrls: ['./update-chien-chasse.component.css']
})
export class UpdateChienChasseComponent implements OnInit {
  id: any
  chienChasse: any
  constructor(private serviceChienChasse: ServiceChienChasseService, private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.serviceChienChasse.getChienChasseById(this.id).subscribe((data) => {
      this.chienChasse = data
    })

  }
  updateChien(f:any){
    return this.serviceChienChasse.updateChienChasse(this.id,f.value).subscribe(()=>{
      this.router.navigate(['/admin/chasse/chienChasse'])
    })
  }
}
