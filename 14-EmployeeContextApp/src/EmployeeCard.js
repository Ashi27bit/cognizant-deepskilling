import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard(props) {
  const theme = useContext(ThemeContext);
  const { employee } = props;

  return (
    <div>
      <p>{employee.name} - {employee.role}</p>
      <button className={theme === 'light' ? 'btn-light' : 'btn-dark'}>
        View Profile
      </button>
    </div>
  );
}

export default EmployeeCard;
