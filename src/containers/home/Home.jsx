import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import Category from '../../components/category/Category';
import Ads from './subpage/Ads';

import './css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home clearfix">
        <HomeHeader cityName={this.props.userInfo.cityName}/>
        <Category/>
        <Ads/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
};

let mapDispatchProps = (dispatch) => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Home);