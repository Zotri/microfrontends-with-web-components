package com.employee.backend.service;

import com.employee.backend.model.Employee;
import com.employee.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee createEmployee(Employee employee) {

        return employeeRepository.save(employee);
    }

    public Boolean isEmployeeSaved(Employee employee) {
        Optional<Employee> _employee = employeeRepository.findById(employee.getId());
        if (_employee.get().getFirstName() != null || _employee.get().getLastName() != null) {
            return true;
        } else
            return false;
        // return id.orElseThrow(() -> new ResourceNotFoundException("Employee with the
        // name " + employee.getFirstName()
        // + "last name" + employee.getLastName() + "is already exist"));
        // return id.orElseThrow(()-> new ResourceNotFoundException("Employee with the
        // name " + employee.getFirstName() + "last name" + employee.getLastName() + "is
        // already exist"));
    }

    public Employee updateEmployee(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return null;
    }

}
