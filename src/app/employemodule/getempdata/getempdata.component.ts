import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';
import { getdatainfo } from './extraclassandinterface/getdatainterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getempdata',
  templateUrl: './getempdata.component.html',
  styleUrls: ['./getempdata.component.scss']
})
export class GetempdataComponent implements OnInit {
   EmpData:getdatainfo[]=[]
  constructor(private empdataservice:EmpdataService,private router:Router){

  }
  ngOnInit(): void {
     this.getAllEmployeData();
  }
  getAllEmployeData(){
    this.empdataservice.getAllEmploye().subscribe((res)=>{
      if(res.result){
          this.EmpData=res.data;
          console.log(this.EmpData)
      }
    })
  }

  gotoemployedetails(Id:number){
      this.router.navigateByUrl(`/empmodule/empdetails/${Id}`);
  }
  

}
