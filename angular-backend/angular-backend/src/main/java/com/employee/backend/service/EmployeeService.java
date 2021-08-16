package com.employee.backend.service;

import com.employee.backend.exception.ResourceNotFoundException;
import com.employee.backend.model.Employee;
import com.employee.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee findEmployeeById(long id) {
        return employeeRepository.findEmployeeById(id)
                .orElseThrow(() -> new ResolutionException("User id " + id + "not found!"));
    }

    public Employee updateEmployee(Long id, Employee employeeBody) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id" + id + "not exist"));
        employee.setFirstName(employeeBody.getFirstName());
        employee.setLastName(employeeBody.getLastName());
        employee.setEmail(employeeBody.getEmail());

        return employeeRepository.save(employee);

        // return employeeRepository.save(employee);
    }

    public void deleteEmployeeById(long id) {
        employeeRepository.deleteEmployeeById(id);
    }
}
