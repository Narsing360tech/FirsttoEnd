import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { dashdata } from './extrainterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data:dashdata[]=[]
  constructor(private dserv: DataService,private route:Router) {
      
  }
  ngOnInit(): void {
    this.dserv.getdata().subscribe((res)=>{
      console.log(res)
      this.data=res;
    })
  }
  gotoshowdata(id:number){
    this.route.navigateByUrl(`/showdata/${id}`)
  }
  

}
