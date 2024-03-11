import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { CreateempComponent } from './createemp/createemp.component';
import { GetempdataComponent } from './getempdata/getempdata.component';
import { EmpdataService } from './empdata.service';
import { ShowempdetailsComponent } from './showempdetails/showempdetails.component';


@NgModule({
  declarations: [
    CreateempComponent,
    GetempdataComponent,
    ShowempdetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule
  ],
  providers:[EmpdataService]
})
export class EmployeModule { }
