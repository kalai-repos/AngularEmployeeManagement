import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;
  pannelExpend = true;

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _empService: EmployeeService) { }

  ngOnInit() {
  }

  handleClick() {
    this.notify.emit(this.employee);
  }

  viewEmployee() {
    this._router.navigate(['/employee', this.employee.id], { queryParams: { SearchTerm: this.searchTerm } });
  }
  deleteEmployee() {
    this._empService.deleteEMployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }

  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }

  // // tslint:disable-next-line:variable-name
  // private _employee: Employee;

  // @Input() employeeId: number;

  // @Input()
  // set employee(val: Employee) {
  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }
  // constructor() { }

  // ngOnInit() {
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //   // Add '${implements OnChanges}' to the class.
  //   //   const currentValues = changes.employee.currentValue as Employee;
  //   //   console.log(currentValues);
  //   Object.keys(changes).forEach(element => {

  //     const change = changes[element];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);

  //     console.log(element + '  from value    ' + from + '  to value   ' + to);
  //   });
  // }

}
