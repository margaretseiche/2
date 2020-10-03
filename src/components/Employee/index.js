import React from "react";
import "./style.css";

function Employee(props) {
    return (
        <table className="tableBlock">
            <thead>
                <tr className="tableHeader">
                    <th></th>
                    <th onClick = {props.sortEmployees}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {props.filteredEmployees.map(employee => (
                    
                    <tr className="tableRow" key={employee.login.uuid}>

                        <td><img className="employeeImage" src={employee.picture.medium} 
                                 alt={employee.name.first + " " + employee.name.last}>
                            </img>
                        </td>

                        <td>{employee.name.first + " " + employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td className="email"><a href={employee.email}>{employee.email}</a></td>
                        <td>{employee.location.city}</td>
                        <td>{employee.location.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Employee;