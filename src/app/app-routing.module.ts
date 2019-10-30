import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, CanActivate } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import * as createEmployeeComponent from './employees/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate.guard';
import { EmployeeListResloverService } from './filters/employee-list-reslover-service';
import { EmployeeDeatilGuard } from './shared/employee-deatil.guard';


const routes: Routes = [

  {
    path: '', redirectTo: '/list', pathMatch: 'full'
  },
  { path: 'list', component: ListEmployeesComponent, resolve: { employeeList: EmployeeListResloverService } },
  {
    path: 'edit/:id', component: createEmployeeComponent.CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  { path: 'employee/:id', component: EmployeeDetailsComponent, canActivate: [EmployeeDeatilGuard] },
  { path: 'notfound', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // { enableTracing: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
