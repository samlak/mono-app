import React from 'react';
import {amountToNaira, stringToDate} from '../../../utils/helper';

import classes from './TableData.module.css';

const TableData = (props) => {
  let tableDataContent = Object.keys(props.content)
    .filter(objectKey => objectKey !== '_id')
    .map((params, index) => {
      let contentValue = props.content[params];
      if (params === "amount") {
        contentValue = amountToNaira(props.content[params]);
      }
      if (props.contentType  === "statement" && params === "date") {
        contentValue = stringToDate(props.content[params]);
      }

      return (
        <td key={index} className={classes.card__table__data}>{contentValue}</td>
      )
  });

  return (
    <tr>
      {tableDataContent}
    </tr>
  );
};

export default TableData;