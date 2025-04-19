import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @ViewChild('myModal') model!: ElementRef;

  employeeList: Employee[] = [];
  empService = inject(EmployeeService);
  employeeForm!: FormGroup;
  formValues: any;

  constructor(private fb: FormBuilder) {
    this.setFormState();
    this.getEmployees();
  }

  openModal() {
    const empModel = document.getElementById("myModal");
    if (empModel != null) {
      empModel.style.display = 'block';
    }
  }

  closeModal() {
    this.setFormState();
    if (this.model) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  getEmployees() {
    this.empService.getAllEmployees().subscribe((res: Employee[]) => {
      this.employeeList = res;
    });
  }

  setFormState() {
    this.employeeForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      age: ['', [Validators.required, Validators.min(18)]],
      salary: ['', Validators.required],
      status: [false]
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      alert("Please fill all forms correctly.");
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.formValues = this.employeeForm.value;

    if (this.formValues.id === 0) {
      // Add new employee
      this.empService.addEmployee(this.formValues).subscribe({
        next: (res) => {
          alert("Added successfully");
          this.getEmployees();
          this.closeModal();
        },
        error: (err) => {
          console.error("Error adding employee:", err);
        }
      });
    } else {
      // Update existing employee
      this.empService.updateEmployee(this.formValues.id, this.formValues).subscribe({
        next: (res) => {
          alert("Updated successfully");
          this.getEmployees();
          this.closeModal();
        },
        error: (err) => {
          console.error("Error updating employee:", err);
        }
      });
    }
  }

  onEdit(employee: Employee) {
    this.employeeForm.patchValue({
      id: employee.id,
      name: employee.name,
      email: employee.email,
      mobile: employee.mobile,
      age: employee.age,
      salary: employee.salary,
      status: employee.status
    });

    this.openModal();
  }

  onDelete(id: number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.empService.deleteEmployee(id).subscribe((res) => {
        alert("Employee deleted successfully");
        this.getEmployees();
      });
    }
  }
}
