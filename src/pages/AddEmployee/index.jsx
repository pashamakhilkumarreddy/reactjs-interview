import React from "react";
import "./index.css";

const AddEmployee = () => {
  const handleOnChange = (e) => {
    try {
      console.log(e.target.value);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className="employee-form form-group">
      <h2 className="text-center">Add a new Employee</h2>
      <div className="control">
        <label htmlFor="firstName">First Name</label>
        <input
          className="form-control"
          id="firstName"
          type="text"
          value=""
          placeholder="First Name"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="control">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="form-control"
          id="lastName"
          type="text"
          value=""
          placeholder="Last Name"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="control">
        <label htmlFor="date">DOB</label>
        <input
          className="form-control"
          id="date"
          type="date"
          value=""
          placeholder="DOB"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="control">
        <label htmlFor="designation">Designation</label>
        <input
          className="form-control"
          id="designation"
          type="text"
          value=""
          placeholder="Designation"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="control">
        <label>
          <input type="file" />
        </label>
      </div>
      <div className="control">
        <label htmlFor="experience">Experience</label>
        <input
          className="form-control"
          id="experience"
          type="number"
          value=""
          placeholder="Experience"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="buttons">
        <div className="btn btn-primary mr-2">Add</div>
        <div className="btn btn-danger">Reset</div>
      </div>
    </form>
  );
};

export default AddEmployee;
