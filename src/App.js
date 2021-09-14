import React from "react";
import EmployeeContext from "./context/EmployeeContext";
import Routes from "./routes";
import "./App.css";

function App() {
  const contextValue = {};
  return (
    <div className="container">
      <div className="col-md-12">
        <h1 className="text-center" style={style}>Welcome to Employee Application</h1>
        <EmployeeContext.Provider value={contextValue}>
          <Routes />
        </EmployeeContext.Provider>
      </div>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
