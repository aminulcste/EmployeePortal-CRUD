using EmployeePortal.Data;
using EmployeePortal.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeePortal.Repository
{
    public class EmployeeRepository
    {
        private readonly AppDbContext db;
        public EmployeeRepository(AppDbContext dbContext)
        {
            this.db = dbContext;

        }
        ///CREATE APi FOR EMPLOYEE LIST
        
        public async Task<List<Employee>>GetAllEmployees()
        {
            return await db.Employees.ToListAsync();
        }

        ////CREATE API FOR ADD EMPLOYEE
        public async Task SaveEmployee(Employee emp)
        {
            await db.Employees.AddAsync(emp);
            await db.SaveChangesAsync();
        }
        public async Task  updateEmployee(int id,Employee obj)
        {
            var employee=await db.Employees.FindAsync(id);
            if (employee == null)
            {
                throw new Exception("Employee not found");

            }
            employee.Name = obj.Name;
            employee.Email = obj.Email;
            employee.Age = obj.Age;
            employee.Salary = obj.Salary;
            employee.Mobile = obj.Mobile;
            employee.Status = obj.Status;

            await db.SaveChangesAsync();


        }
        public async Task DeleteEmployee(int id)
        {
            var employee = await db.Employees.FindAsync(id);
            if (employee == null)
            {
                throw new Exception("not found");
            
            }
            db.Employees.Remove(employee);
            await db.SaveChangesAsync();
        }
    }
}
