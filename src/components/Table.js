import React from 'react';
import SortByBtn from './SortByBtn';
import TableItem from './TableItem';

function Table(props) {
    console.log(props.emArr)
    return (
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            id
                            <SortByBtn handleClick={props.handleClick} data-name="id"/>
                        </th>
                        <th scope="col">
                            First Name
                            <SortByBtn handleClick={props.handleClick} data-name="fName"/>
                        </th>
                        <th scope="col">
                            Last Name
                            <SortByBtn handleClick={props.handleClick} data-name="lName"/>
                        </th>
                        <th scope="col">
                            Email
                            <SortByBtn handleClick={props.handleClick} data-name="email"/>
                        </th>
                        <th scope="col">
                            Phone
                            <SortByBtn handleClick={props.handleClick} data-name="phone"/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.emArr ? props.emArr.map((emp, index) => (
                        <TableItem id={emp.id} fName={emp.first_name} lName={emp.last_name} email={emp.email} phone={emp.phone} />
                    ))
                :
                "goodbye"
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;