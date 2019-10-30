import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm', { static: false }) public createemployee: NgForm;
  datepickerconfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';
  PreviewImage = false;
  employee: Employee;


  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  // tslint:disable-next-line:variable-name
  constructor(private _employeeservice: EmployeeService, private _route: Router, private _router: ActivatedRoute) {
    this.datepickerconfig = Object.assign({}, { containerClass: this.colorTheme, showWeekNUmbers: false });
  }

  showImages() {
    this.PreviewImage = !this.PreviewImage;
  }

  saveEmployee(): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeservice.saveEmployee(newEmployee);
    this.createemployee.reset();
    this._route.navigate(['list']);
  }

  ngOnInit() {
    this._router.paramMap.subscribe(pMap => {
      const id = +pMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        department: '-1',
        isActive: null,
        photoPath: null,
        password: null,
        confirmPassword: null
      };
    } else {
      this.employee = this._employeeservice.getEmployeeDtl(id);
    }
  }

}
