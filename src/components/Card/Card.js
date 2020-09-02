import React from 'react';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import classes from './Card.module.css';

const Card = (props) => {
  let contentClass = classes.card__content;
  if (props.showContent) {
    contentClass = [classes.card__content, classes.card__content__show].join(' ');
  }

  let cardContent = <Spinner />;
  let pagination = null;
  if(props.contentInfo !== null) {
    cardContent = (
      <div>
        <p className={classes.card__content__text}>{props.contentHeader}</p>
        <div className={classes.responsive__table}>
          <Table data={props.contentInfo} contentType={props.contentType}/>
        </div>
      </div>
    );

    if(props.contentType === "statement") {
      if(props.contentInfo.tableData.length === 0){
        cardContent = (
          <div>
            <p className={[classes.card__content__text, classes.card__content__text__center].join(' ')}>No record found.</p>
          </div>
        );
      }
    } else {
      if(props.contentInfo.tableData.history.length === 0){
        cardContent = (
          <div>
            <p className={[classes.card__content__text, classes.card__content__text__center].join(' ')}>No record found.</p>
          </div>
        );
      }
    }

    const dataLength = props.initialContentLength;
    const paginationInterval = 5;
    const paginationSize = dataLength/paginationInterval;

    let paginationComponent = [];
    for (let i = 0; i < paginationSize; i++) {
      const start = i * paginationInterval;
      let end = start + paginationInterval;
      if (end > dataLength) {
        end = dataLength;
      }
      paginationComponent.push(<Pagination key={i} number={i + 1} control={() => props.onPagination(start, end)}/>);
    }

    pagination = paginationComponent.map((data) => {
      return data;
    })

    if(paginationInterval >= dataLength){
      pagination = null;
    }
  }

  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <p className={classes.card__heading}>{props.headerText}</p>
        <button className={classes.card__button} onClick={props.showContentFunction}>Show Info</button>
      </div>
      <div className={contentClass}>
        {cardContent}
        {pagination}
      </div>
    </div>
  );
};

export default Card;