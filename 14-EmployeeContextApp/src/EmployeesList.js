import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList(props) {
  const { employees } = props;
  return (
    <div>
      <h2>Employees</h2>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeesList;
