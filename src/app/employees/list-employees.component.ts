import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {


  // tslint:disable-next-line:variable-name
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    this.employees = this._route.snapshot.data.employeeList;
    if (this.employees) { this.displayEmployee = this.employees[0]; }
  }

  employees: Employee[];
  displayEmployee: Employee;
  private arrayofIndex = 1;
  dataFromChild: Employee;


  // tslint:disable-next-line:variable-name
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    // this.filteredEmployees = this.filtereEmployees(value);
  }

  ngOnInit() {
    // this._employeeService.getEmployee().subscribe((empList) => {
    // this.employees = empList;
    // this.displayEmployee = this.employees[0];
    // });
  }

  nextEmployee(): void {
    if (this.arrayofIndex < this.employees.length) {
      this.displayEmployee = this.employees[this.arrayofIndex];
      this.arrayofIndex++;
    } else {
      this.displayEmployee = this.employees[0];
      this.arrayofIndex = 1;
    }
  }
  handleNOtify(eventchange: Employee) {
    this.dataFromChild = eventchange;
  }

  onNofificationDeleteEvent(id: number) {
    const foundIndex = this.employees.findIndex(e => e.id === id);
    if (foundIndex !== -1) {
      this.employees.splice(foundIndex, 1);
    }
  }
  onClick(id: number): void {
    this._router.navigate(['/employee', id], { queryParams: { SearchTerm: this.searchTerm, testparam: '0' } });
  }

}
