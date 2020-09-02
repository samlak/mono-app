import React from 'react';
import TableHead from './TableHead/TableHead';
import TableData from './TableData/TableData';
import classes from './Table.module.css';

const Table = (props) => {
  const tableHead = <TableHead content={props.data.tableHead}/>;
  
  let tableData;
  if (props.contentType === "statement") {
    tableData = props.data.tableData.map((data, index) => {
      return (
        <TableData 
          key={index} 
          serialNumber={index + 1} 
          content={data} 
          contentType={props.contentType}
        />
      )
    });
  } else {
    tableData = props.data.tableData.history.map((data, index) => {
      return (
        <TableData 
          key={index} 
          serialNumber={index + 1} 
          content={data} 
          contentType={props.contentType}
        />
      )
    });
  }

  return (
    <table className={classes.card__table}>
        <thead className={classes.card__table__row}>
          {tableHead}
        </thead>
        <tbody className={classes.card__table__row}>
          {tableData}
        </tbody>
    </table>
  );
};

export default Table;