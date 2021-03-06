import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
const routes: Routes = [
  { path:'employee',component:EmployeeComponent},
  { path:'create',component:CreateEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


