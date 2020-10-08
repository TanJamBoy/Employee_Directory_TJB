import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Table from "../components/Table";
import Employees from '../utils/employees.json';

function Main() {

    const [empolyeeArr, setEmpolyeeArr] = useState();

    useEffect(() => {
        console.log(empolyeeArr)
        if (empolyeeArr === undefined) {
            console.log("got into if block")
            setEmpolyeeArr(Employees);
        }
    }, [])

    const sortArr = (e) => {

        console.log("hello")
        console.log(e)

        let newArr = [];

        switch (e) {
            case "id":
                
                newArr = empolyeeArr.sort((a, b) => {
                    return a.id - b.id;
                });
    
            break;
        
            case "fName":
    
            console.log("got into fName")
                newArr = empolyeeArr.sort((a, b) => {
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
    
                newArr = empolyeeArr.sort((a, b) => {
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
    
                newArr = empolyeeArr;
    
            break;
        };
        console.log(newArr)
        setEmpolyeeArr(newArr)
    };

    console.log(empolyeeArr)

    return(
        <div className="container-fluid">
            <Header />
            <Table emArr={empolyeeArr} handleClick={sortArr}/>
        </div>
    );
};

export default Main;