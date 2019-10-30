import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png',
      password: '',
      confirmPassword: ''
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png',
      password: '',
      confirmPassword: ''
    }

  ];

  getEmployee(): Observable<Employee[]> {
    return of(this.listEmployees).pipe(delay(2000));
  }
  getEmployeeDtl(id: number): Employee {
    // tslint:disable-next-line:triple-equals
    return this.listEmployees.find(e => e.id == id);
  }
  saveEmployee(employee: Employee) {
    this.listEmployees.push(employee);
  }

  constructor() { }
}
