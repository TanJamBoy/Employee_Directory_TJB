import React from 'react';

function SortByBtn(props) {
    return (
        <button onClick={() => props.handleClick(props['data-name'])} {...props} className="btn btn-primary mx-2">Sort By</button>
    );
};

export default SortByBtn;