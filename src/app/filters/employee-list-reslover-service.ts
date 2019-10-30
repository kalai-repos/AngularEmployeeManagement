import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employees/employee.service';

@Injectable()
export class EmployeeListResloverService implements Resolve<Employee[]> {
    constructor(private employeeService: EmployeeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
        return this.employeeService.getEmployee();
    }
}
