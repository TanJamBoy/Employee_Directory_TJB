import React from 'react';

function TableItem(props) {
    return (
        <tr>
            <th>{props.id}</th>
            <td>{props.fName}</td>
            <td>{props.lName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    );
};

export default TableItem;