import React, { Component } from 'react';
import Card from "../../components/Card/Card";
import AccountCard from "../../components/Card/AccountCard/AccountCard";
import classes from './Account.module.css';
import axios from '../../utils/axios'; 
import {amountToNaira} from '../../utils/helper';

class Account extends Component {
  state = {
    accountCode: "code_irgTyLXjD0fWXftD6kUC",
    accountId: "5f1b07430af2a4284935cf54",
    accountData: null,
    debitData: {
      tableHead: ["S/N", "Amount", "Date"],
      tableData: {
        total: 2000000, 
        history:[{ 
          amount: 1000000,
          period: "06-20" 
        },{ 
          amount: 2000000,
          period: "06-20" 
        },{ 
          amount: 3000000,
          period: "06-20" 
        },{ 
          amount: 4000000,
          period: "06-20" 
        },{ 
          amount: 5000000,
          period: "06-20" 
        },{ 
          amount: 6000000,
          period: "06-20" 
        },{ 
          amount: 7000000,
          period: "06-20" 
        },{ 
          amount: 8000000,
          period: "06-20" 
        }]
      }
    },
    debitDataToShow: {
      tableHead: ["S/N", "Amount", "Date"],
      tableData: {
        total: 2000000, 
        history:[{ 
          amount: 1000000,
          period: "06-20" 
        },{ 
          amount: 2000000,
          period: "06-20" 
        },{ 
          amount: 3000000,
          period: "06-20" 
        },{ 
          amount: 4000000,
          period: "06-20" 
        },{ 
          amount: 5000000,
          period: "06-20" 
        }]
      }
    },
    creditData: null,
    creditDataToShow: null,
    statementData: {
      tableHead: ["S/N", "Amount", "Date", "Narration", "Type", "Category"],
      tableData: [{ 
        _id: "5f171a540295e231abca1154", 
        amount: 10000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      },{ 
        _id: "5f171a540295e231abca1154", 
        amount: 20000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      },{ 
        _id: "5f171a540295e231abca1154", 
        amount: 30000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      },{ 
        _id: "5f171a540295e231abca1154", 
        amount: 40000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      },{ 
        _id: "5f171a540295e231abca1154", 
        amount: 50000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      },{ 
        _id: "5f171a540295e231abca1154", 
        amount: 60000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      }]
    },
    statementDataToShow: {
      tableHead: ["S/N", "Amount", "Date", "Narration", "Type", "Category"],
      tableData: [{ 
        _id: "5f171a540295e231abca1154", 
        amount: 10000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      },{ 
        _id: "5f171a540295e231abca1154", 
        amount: 20000, 
        date: "2020-07-21T00:00:00.000Z", 
        narration: "TRANSFER from HASSAN ABDULHAMID TOMIWA to OGUNGBEFUN OLADUNNI KHADIJAH", 
        type: "debit",
        category: "E-CHANNELS", 
      }]
    },
    // statementData: null,
    showDebit: false,
    showCredit: false,
    showStatement: false,
  }

  componentDidMount () {
    // if(this.props.location.state){
    //   this.setState({userCode: this.props.location.state.code})
    // }

    this.accountInfo();
  }

  dataToShow (type, start, end) {
    if (type === "debit") {
      const debitData = this.state.debitData.tableData.history;
      const newData = [];
      for (let i = start; i < end; i++) {
        newData.push(debitData[i]);
      }

      this.setState(prevState => {
        return {
          debitDataToShow: {
            ...prevState.debitData,
            tableData: {
              ...prevState.debitData.tableData,
              history: newData
            }
        }}
      });

    } else if (type === "credit") {
      const creditData = this.state.creditData.tableData.history;
      const newData = [];
      for (let i = start; i < end; i++) {
        newData.push(creditData[i]);
      }

      this.setState(prevState => {
        return {
          creditDataToShow: {
            ...prevState.creditData,
            tableData: {
              ...prevState.creditData.tableData,
              history: newData
            }
        }}
      });
      
    } else if (type === "statement") {
      const statementData = this.state.statementData.tableData;
      const newData = [];
      for (let i = start; i < end; i++) {
        newData.push(statementData[i]);
      }

      this.setState(prevState => {
        return {
          statementDataToShow: {
            ...prevState.statementData,
            tableData: newData
        }}
      });
    } 
  }

  accountInfo () {
    axios.get(`/accounts/${this.state.accountId}`)
    .then(response => {
      this.setState({accountData: response.data});
    })
    .catch(error => console.log(error));
  }

  debitInfo () {
    axios.get(`/accounts/${this.state.accountId}/debits`)
    .then(response => {
      const history = [];
      response.data.history.map((data, index) => {
        return history.push({
                "sn": index + 1,
                ...data
              });
      })
      const tableData = {
        ...response.data,
        history
      }

      const debitData = {
        tableHead: ["S/N", "Date", "Amount"],
        tableData: {...response.data}
        // tableData: tableData
      }
      this.setState({debitData});
      this.dataToShow('debit', 0, 20);
    })
    .catch(error => console.log(error));
  }

  creditInfo () {
    axios.get(`/accounts/${this.state.accountId}/credits`)
    .then(response => {
      const creditData = {
        tableHead: ["S/N", "Date", "Amount"],
        tableData: {...response.data}
      }
      this.setState({creditData});
      this.dataToShow('credit', 0, 20);
    })
    .catch(error => console.log(error));
  }

  statementInfo () {
    axios.get(`/accounts/${this.state.accountId}/statement?period=last6months`)
    .then(response => {

      const tableData = [];
      response.data.map((data, index) => {
        return tableData.push({
                "sn": index + 1,
                ...data
              });
      })

      const statementData = {
        tableHead: ["S/N", "Amount", "Date", "Narration", "Type", "Category"],
        tableData: [response.data]
        // tableData: tableData
      }
      console.log(statementData);
      // this.setState({statementData});
      // this.dataToShow('statement', 0, 20);
    })
    .catch(error => console.log(error));
  }

  showContentFunction (type) {
    if (type === "debit") {
      if(this.state.debitData === null) {
        this.debitInfo();
      }
      this.setState(prevState => {
        return {showDebit: !prevState.showDebit}
      });
    } else if (type === "credit") {
      if(this.state.creditData === null) {
        this.creditInfo();
      }
      this.setState(prevState => {
        return {showCredit: !prevState.showCredit}
      });
    } else if (type === "statement") {
      if(this.state.statementData === null) {
        this.statementInfo();
      }
      this.setState(prevState => {
        return {showStatement: !prevState.showStatement}
      });
    } 
  }

  render() {
    let debitTotal = 0;
    if(this.state.debitData && this.state.debitData.tableData && this.state.debitData.tableData.total) {
      debitTotal = this.state.debitData.tableData.total;
    }

    let creditTotal = 0;
    if(this.state.creditData && this.state.creditData.tableData && this.state.creditData.tableData.total) {
      creditTotal = this.state.creditData.tableData.total;
    }

    const accountCard = 
      <AccountCard 
        contentInfo={this.state.accountData}
      />;

    const debitCard  = 
      <Card 
        headerText="Debit Transaction"
        contentHeader={`Total Amount of Debit Transaction : ${amountToNaira(debitTotal)}`}
        contentInfo={this.state.debitDataToShow}
        contentType="debit"
        showContentFunction={() => this.showContentFunction("debit")}
        showContent={this.state.showDebit}
        initialContentLength={this.state.debitData !== null ? this.state.debitData.tableData.history.length : 0}
        onPagination={(start, end) => this.dataToShow("debit", start, end)}
      />;

    const creditCard = 
      <Card 
        headerText="Credit Transaction"
        contentHeader={`Total Amount of Credit Transaction : ${amountToNaira(creditTotal)}`}
        contentInfo={this.state.creditDataToShow}
        contentType="credit"
        showContentFunction={() => this.showContentFunction("credit")}
        showContent={this.state.showCredit}
        initialContentLength={this.state.creditData !== null ? this.state.creditData.tableData.history.length : 0}
        onPagination={(start, end) => this.dataToShow("credit", start, end)}
      />;

    const statementCard = 
      <Card 
        headerText="Financial Statement"
        contentHeader="Finacial Statement for the Last Six Months"
        contentInfo={this.state.statementDataToShow}
        contentType="statement"
        showContentFunction={() => this.showContentFunction("statement")}
        showContent={this.state.showStatement}
        initialContentLength={this.state.statementData !== null ? this.state.statementData.tableData.length : 0}
        onPagination={(start, end) => this.dataToShow("statement", start, end)}
      />;

    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.heading__1}>Muney</h1>
          <h2 className={classes.heading__2}>Finacial Report with Mono</h2>
        </div>   
        {accountCard}
        {debitCard}
        {creditCard}
        {statementCard}
      </div>
    )
  };
};

export default(Account);