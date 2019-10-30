
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this._route.paramMap.subscribe(param => {
      this._id = +param.get('id');
      this.employee = this._employeeService.getEmployeeDtl(this._id);
    });
    console.log(this._id);

    // console.log(this.employee);
  }

  ViewNextEmployee(): void {
    if (this._id >= 2) { this._id = 1; } else {
      this._id = ++this._id;
    }
    console.log(this._id);
    this._router.navigate(['/employee', this._id]);
  }

}
