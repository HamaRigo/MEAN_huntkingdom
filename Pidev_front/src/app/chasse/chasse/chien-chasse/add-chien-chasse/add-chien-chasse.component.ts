import { Component, OnInit } from '@angular/core';
import {ServiceChienChasseService} from "../services/service-chien-chasse.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-chien-chasse',
  templateUrl: './add-chien-chasse.component.html',
  styleUrls: ['./add-chien-chasse.component.css']
})
export class AddChienChasseComponent implements OnInit {
  constructor(private serviceChienChasse:ServiceChienChasseService,private route:Router) { }

  ngOnInit(): void {

  }
  addChien(f:any){
    this.serviceChienChasse.postChienChasse(f.value).subscribe(()=>{
      this.route.navigate(['admin/chasse/chienChasse'])
    })
  }
}
