import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { TestdirectiveDirective } from './testdirective.directive';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectorRequiredDirective } from './shared/selector-required.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './filters/employee-filter.pipe';
import { EmployeeListResloverService } from './filters/employee-list-reslover-service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { EmployeeDeatilGuard } from './shared/employee-deatil.guard';
import { AccordionComponent } from './shared/accordion.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    TestdirectiveDirective,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectorRequiredDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService, EmployeeListResloverService, EmployeeDeatilGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
