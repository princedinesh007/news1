import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
data:any;
  constructor(public ser:ServiceService) { }

  ngOnInit(): void {

    this.ser.general().subscribe((res:any)=>{
      console.log(res);
      this.data=res.articles;
    })
  }

  }


