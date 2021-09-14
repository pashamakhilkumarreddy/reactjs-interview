import React from "react";
import { Link } from "react-router-dom";

const Employees = ({ employees = [], deleteEmployee }) => {
  return (
    <div className="row">
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Designation</th>
            <th>Profile Photo</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeDetails
              key={employee.id}
              {...employee}
              deleteEmployee={deleteEmployee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const EmployeeDetails = ({
  id,
  name = "John",
  username = "Doe",
  company,
  thumbnailUrl,
  deleteEmployee,
}) => {
  return (
    <tr key={id}>
      <td>
        <a href={`/employee/${id}`}>{id}</a>
      </td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{new Date().toDateString()}</td>
      <td>{company ? company.name : "Software Engineer"}</td>
      <td>
        <img
          src={thumbnailUrl || ""}
          alt={name}
          loading="lazy"
          decoding="async"
        />
      </td>
      <td>{Math.ceil((Math.random() * 100) / 10)}</td>
      <td>
        <Link to={`/employee/${id}`} className="btn btn-info mx-2">
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => deleteEmployee(id, name)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employees;
