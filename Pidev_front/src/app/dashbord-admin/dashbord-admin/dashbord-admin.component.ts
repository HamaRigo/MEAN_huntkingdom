import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../../chasse/chasse/localisation/service/service-localisation.service";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {
result:any
  location:any
  nombreEspece:any
  chart:any=[]
  chart2:any=[]
  constructor( private localisationService:ServiceLocalisationService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.localisationService.getLocationNumber().subscribe((data)=>{
      this.result=data
      console.log(data)
    this.location=this.result.localisation.map((localisation:any)=>localisation.nom)
    this.nombreEspece=this.result.numberEspece.map((numberEspece:any)=>numberEspece)

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.location,
          datasets: [
            {
              data: this.nombreEspece,
              //borderColor: '#3e95cd',
              //fill: false,
              label: 'Nbre Especes par Location',
             // backgroundColor: 'rgba(93, 175, 89, 0.1)',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],

              borderWidth: 1,
            },
          ],
        },
      });
      this.chart2 = new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.location,
          datasets: [
            {
              data: this.nombreEspece,
              //borderColor: '#3e95cd',
              //fill: false,
              label: 'Nbre Especes par Location',
              // backgroundColor: 'rgba(93, 175, 89, 0.1)',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],

              borderWidth: 1,
            },
          ],
        },
      });
    })
  }

}
