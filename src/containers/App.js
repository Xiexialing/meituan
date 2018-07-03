import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/index';
import {getLocal} from '../util/index';
import {DEFAULT_CITY, CITY_NAME} from '../constants/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    let cityName = getLocal(CITY_NAME);
    if (!cityName) {
      cityName = DEFAULT_CITY
    }
    this.props.userInfoActions.setUserInfo({
      cityName: cityName
    })
  }
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    userInfoActions: bindActionCreators(Actions, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

