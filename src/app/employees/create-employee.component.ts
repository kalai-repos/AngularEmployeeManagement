import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datepickerconfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';
  PreviewImage = false;


  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  constructor() {
    this.datepickerconfig = Object.assign({}, { containerClass: this.colorTheme, showWeekNUmbers: false });
  }

  showImages() {
    this.PreviewImage = !this.PreviewImage;
  }

  saveEmployee(employeeForm: Employee): void {
    console.log(employeeForm);
  }

  ngOnInit() {
  }

}
