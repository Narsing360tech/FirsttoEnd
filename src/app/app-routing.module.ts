import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ShowempdataComponent } from './showempdata/showempdata.component';
import { ShowempdetailsComponent } from './employemodule/showempdetails/showempdetails.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'auth',loadChildren:()=> import('./authmodule/auth.module').then(m=>m.AuthModule)},
  {path:'empmodule',loadChildren:()=> import('./employemodule/employe.module').then(m=>m.EmployeModule)},
  {path:'showdata/:id',component:ShowempdataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
