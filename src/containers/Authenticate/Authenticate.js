import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {appendScript, removeScript} from '../../utils/connectToMonoWidget';

import classes from './Authenticate.module.css';

class Authenticate extends Component {
  state = {
    userCode: null
  }

  componentDidMount () {
    appendScript("https://connect.withmono.com/connect.js");
  }

  componentWillUnmount () {
    removeScript("https://connect.withmono.com/connect.js");
  }

  connectToMono () {
    const globalThis = this;
    const options = {
      onSuccess: function (response) {
        globalThis.setState({userCode: response.code});
      },

      onClose: function () {
      }
    };
    
    const connect = new window.Connect("test_pk_7qB9X0xh4gzspopG3rBF", options);
    console.log(connect)
    connect.options.onSuccess(() => {
      console.log('Hi')
    });
    connect.setup();
    connect.open();
    
  }
  
  render() {
    let authenticate = null;
    console.log(this.state.userCode);
    if(this.state.userCode) {
      authenticate = <Redirect to={{
          pathname: '/account',
          state: {userCode: this.state.userCode}
        }} 
      />
    }

    return ( 
      <div>
        {authenticate} 
        <div className={classes.authenticate}>
          <button className={classes.authenticate__button} onClick={this.connectToMono.bind(this)}>Authenticate with Mono</button>
        </div>
      </div>
    )
  };
};

export default(Authenticate);