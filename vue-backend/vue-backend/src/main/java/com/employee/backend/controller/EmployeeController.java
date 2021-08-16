package com.employee.backend.controller;

import com.employee.backend.model.Employee;
import com.employee.backend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees/")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/new-employee")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Boolean isExist = employeeService.isEmployeeSaved(employee);
        if (isExist) {
            return new ResponseEntity<>(employee, HttpStatus.BAD_REQUEST);
        }

        Employee newEmployee = employeeService.createEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.OK);
    }

}
