import React from 'react';

import classes from './TableHead.module.css';

const TableHead = (props) => {
  const tableHeadContent = props.content.map((head, index) => {
    return (
      <th key={index} className={classes.card__table__head}>{head}</th>
    );
  });
  return (
    <tr>
      {tableHeadContent}
    </tr>
  );
};

export default TableHead;