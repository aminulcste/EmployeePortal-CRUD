import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../models/employee';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl='https://localhost:7217/api/Employee'
  constructor(){}
  http=inject(HttpClient);
  getAllEmployees()
  {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  addEmployee(data:any)
  {
    return this.http.post(this.apiUrl,data);
  }
  updateEmployee(id: number, employee: Employee): Observable<any> {
    // Implementation depends on your backend API
    // For example, if using HttpClient:
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
