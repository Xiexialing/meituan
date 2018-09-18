import React, {Component} from 'react';
import './css/homeHeader.css';

class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header">
        <div className="home-addr">
          <span>{this.props.cityName}</span>
          <i className="icon-angle-down"></i>
        </div>
        <div className="search-wrapper">
          <i className="icon-search"></i>
          <input type="text" className="home-search" placeholder="请输入关键字"/>
        </div>
        <div className="user">
          好像是
          <i className="icon-user"></i>
        </div>
      </div>
    )
  }
}
export default HomeHeader;
