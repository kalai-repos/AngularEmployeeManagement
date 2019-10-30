import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employees/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDeatilGuard implements CanActivate {

  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService, private _route: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const employeeExist = this._employeeService.getEmployeeDtl(+route.paramMap.get('id'));
    console.log(employeeExist);
    if (employeeExist) {
      return true;
    } else {
      this._route.navigate(['/notfound']);
      return false;
    }
  }



}
