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

  this.ser.greeting().subscribe((res:any)=>{
    this.data=res;
    console.log(this.data)
  })
  }

}
