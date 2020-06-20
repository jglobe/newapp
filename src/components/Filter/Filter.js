import React from 'react';
import './Filter.css';

const Filter = () => {

    return (
        <div className="Filter btn-group">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-warning">Active</button>
            <button className="btn btn-success">Done</button>
        </div>
    );
}

export default Filter;