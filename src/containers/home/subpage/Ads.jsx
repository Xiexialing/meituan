import React, {Component} from 'react';
import {interact} from '../../../api'
import HomeAds from '../../../components/homeAds/HomeAds';

class Ads extends Component {
  constructor() {
    super()
    this.state = {
      adsList: []
    }
  }

  render() {
    return (
      <div>
        {
          this.state.adsList.length?<HomeAds adsList={this.state.adsList}/>: '加载中...'
        }
      </div>
    )
  }

  componentDidMount() {
    interact('ads', 'GET', {}, (res) => {
      this.setState({
        adsList: res.data
      })
    })
  }
}
export default Ads;