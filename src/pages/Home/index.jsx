import React, { useEffect, useState } from "react";
import Employees from "../../component/Employees";
import EmployeeService from "../../services/EmployeeService";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const result = await EmployeeService.fetchEmployees();
      if (result.status && result.statusText === "OK") {
        return result.data;
      }
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const getEmployeesProfilePics = async () => {
    try {
      const result = await EmployeeService.fetchEmployeeProfilePics();
      if (result.status && result.statusText === "OK") {
        return result.data;
      }
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    const result = Promise.all([getEmployees(), getEmployeesProfilePics()]);
    result.then((res) => {
      const employees = res[0].map((emp, i) => ({
        ...(res[1][i] || {}),
        ...emp,
      }));
      setEmployees(employees);
    });
  }, []);

  const deleteEmployee = (id, name) => {
    if (
      window.confirm(
        `Are you sure you want to delete the user ${name} with ${id}`
      )
    ) {
      const updatedEmployees = employees.filter((emp) => emp.id !== id);
      setEmployees(updatedEmployees);
    }
  };

  return (
    <>
      <h2 className="text-center">Employees</h2>
      <Employees employees={employees} deleteEmployee={deleteEmployee} />
    </>
  );
};

export default Home;
