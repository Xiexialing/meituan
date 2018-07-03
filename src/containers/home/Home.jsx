import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from '../../components/homeHeader/HomeHeader';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeHeader cityName={this.props.userInfo.cityName}/>
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