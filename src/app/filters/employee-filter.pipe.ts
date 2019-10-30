import { Employee } from '../models/employee.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], searchTerm: string): any {

    if (searchTerm === undefined) {
      return employees;
    }

    if (!employees && !searchTerm) {
      return employees;
    }

    return employees.filter(emp => emp.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
