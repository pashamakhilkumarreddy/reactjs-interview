import React, { useState } from "react";

const Employee = () => {
  const [id] = useState(window.location.pathname.split("/").slice(-1)[0]);

  return (
    <>
      <h2 className="text-center">Employee {id}</h2>
    </>
  );
};

export default Employee;
