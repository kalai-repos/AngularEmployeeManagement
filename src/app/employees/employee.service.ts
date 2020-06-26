import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


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
    // this.httpClient.get('http://localhost:3000/employees');
    return of(this.listEmployees).pipe(delay(2000));
  }
  getEmployeeDtl(id: number): Employee {
    // tslint:disable-next-line:triple-equals
    return this.listEmployees.find(e => e.id == id);
  }
  saveEmployee(employee: Employee) {
    if (employee.id === null) {
      // tslint:disable-next-line:only-arrow-functions
      const maxId = this.listEmployees.reduce(function(e1, e2) {
        return (e1 > e2) ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEMployee(id: number) {
    const foundIndex = this.listEmployees.findIndex(e => e.id === id);
    if (foundIndex !== -1) {
      this.listEmployees.splice(foundIndex, 1);
    }
  }

  constructor(private httpClient: HttpClient) { }
}
