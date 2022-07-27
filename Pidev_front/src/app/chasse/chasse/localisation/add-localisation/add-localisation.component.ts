import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../service/service-localisation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-localisation',
  templateUrl: './add-localisation.component.html',
  styleUrls: ['./add-localisation.component.css']
})
export class AddLocalisationComponent implements OnInit {

  constructor(private serviceLocalisation:ServiceLocalisationService,private route:Router) { }

  ngOnInit(): void {
  }
addLocalisation(f:any){
  console.log(f.value)
    this.serviceLocalisation.postLocalisation(f.value).subscribe(()=>{
      this.route.navigate(['/admin/chasse/localisation'])
    })
}
}
