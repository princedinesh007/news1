import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
data:any;
  constructor(public ser:ServiceService) { }

  ngOnInit(): void {

    this.ser.general().subscribe((res:any)=>{
      console.log(res);
      this.data=res.articles;
    })
  }

}
