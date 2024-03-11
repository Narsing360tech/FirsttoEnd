import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetempdataComponent } from './getempdata/getempdata.component';
import { ShowempdetailsComponent } from './showempdetails/showempdetails.component';

const routes: Routes = [ 
  {path:'',pathMatch:'full',redirectTo:'getempdata'},
  {path:'getempdata',component:GetempdataComponent},
  {path:'empdetails/:id',component:ShowempdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
