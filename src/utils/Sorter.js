import React from 'react';
import TableItem from '../components/TableItem';
import Employees from '../utils/employees.json';

function Sorter(sortBy) {

    console.log("in the sorter")
    console.log(sortBy)

    let newArr = []

    switch (sortBy) {
        case "id":
            
            newArr = Employees.sort((a, b) => {
                return a.id - b.id;
            });

        break;
    
        case "fName":

            newArr = Employees.sort((a, b) => {
                let nameA = a.first_name.toUpperCase();
                let nameB = b.first_name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                };
                if (nameA > nameB) {
                    return 1;
                };
                return 0;
            });
            
        break;

        case "lName":

            newArr = Employees.sort((a, b) => {
                let nameA = a.last_name.toUpperCase();
                let nameB = b.last_name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                };
                if (nameA > nameB) {
                    return 1;
                };
                return 0;
            });
            
        break;

        case "email":
            
        break;

        case "phone":
            
        break;
        default:

            newArr = Employees;

        break;
    };

    console.log(newArr);

    return (
        newArr.map((emp, index) => (
            <TableItem id={emp.id} fName={emp.first_name} lName={emp.last_name} email={emp.email} phone={emp.phone} />
        ))
    );
};

export default Sorter;