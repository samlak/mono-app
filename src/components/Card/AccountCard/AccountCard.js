import React from 'react';
import Spinner from '../../Spinner/Spinner';
import {amountToNaira} from '../../../utils/helper';
import classes from './AccountCard.module.css';

const AccountCard = (props) => {
  let cardContent = <Spinner />;
  if (props.contentInfo !== null) {
    cardContent = 
      <div>
        <div className={classes.row}>
          <div className={classes.right}>Name</div>
          <div className={classes.left}>{props.contentInfo.name}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.right}>BVN (Last 4 Digit)</div>
          <div className={classes.left}>{props.contentInfo.bvn}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.right}>Account Number</div>
          <div className={classes.left}>{props.contentInfo.accountNumber}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.right}>Account Balance</div>
          <div className={classes.left}>{amountToNaira(props.contentInfo.balance)}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.right}>Currency</div>
          <div className={classes.left}>{props.contentInfo.currency}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.right}>Account Type</div>
          <div className={classes.left}>{props.contentInfo.type}</div>
        </div>
      </div>
  }
  
  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <p className={classes.card__heading}>Account Information</p>
      </div>
      <div className={classes.card__content}>
        {cardContent}
      </div>
    </div>
  );
};

export default AccountCard;