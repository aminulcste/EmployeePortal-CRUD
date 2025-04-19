# Employee Portal CRUD Application

## Overview
This is a CRUD (Create, Read, Update, Delete) application for managing employee records. It is built using **Angular** for the frontend and **ASP.NET Core Web API** for the backend. The application allows users to:
- Add new employees.
- View employee details.
- Edit employee records.
- Delete employees.

## Technologies Used
- **Frontend**: Angular
- **Backend**: ASP.NET Core Web API
- **Database**:MSSQL
- **Styling**: Bootstrap for responsive design

## Features
- **Create Employee**: Allows the addition of new employee records into the system.
- **Read Employee**: Displays a list of all employees and allows viewing individual employee details.
- **Update Employee**: Provides functionality to edit employee details.
- **Delete Employee**: Allows the removal of employee records.

## Installation & Setup

### Prerequisites
To run this application, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (for the Angular frontend)
- [ASP.NET Core SDK](https://dotnet.microsoft.com/download) (for the backend)
- [Visual Studio Code](https://code.visualstudio.com/) or any code editor of your choice
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (if using SQL Server for the database)

### Frontend (Angular) Setup
1. Navigate to the Angular frontend folder:
    ```bash
    cd angular-frontend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Start the Angular development server:
    ```bash
    ng serve
    ```
4. Open your browser and visit `http://localhost:4200` to access the frontend.

### Backend (ASP.NET Core) Setup
1. Navigate to the ASP.NET Core Web API folder:
    ```bash
    cd aspnetcore-backend
    ```
2. Restore the project dependencies:
    ```bash
    dotnet restore
    ```
3. Run the ASP.NET Core application:
    ```bash
    dotnet run
    ```
4. The Web API will be available at `http://localhost:5000` (or a similar address).

### API Endpoints
- `GET /api/employees` - Fetch all employees.
- `GET /api/employees/{id}` - Fetch details of a specific employee by ID.
- `POST /api/employees` - Add a new employee.
- `PUT /api/employees/{id}` - Update an existing employee's details.
- `DELETE /api/employees/{id}` - Delete an employee.


