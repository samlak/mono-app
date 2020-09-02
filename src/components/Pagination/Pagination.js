import React from 'react';

import classes from './Pagination.module.css';

const Pagination = (props) => (
    <div className={classes.pagination} onClick={props.control}>{props.number}</div>
);

export default Pagination;