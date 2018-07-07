import React, {Component} from 'react';
import './css/homeAds.css';

class HomeAds extends Component {
  render() {
    return (
      <div className="home-ads">
        <h1 className="home-ads-title">超值特惠</h1>
        <ul className="home-ads-content">
          {
            this.props.adsList.map((ad, index) => {
              return (<li key={index}
                          className={`home-ads-item ${index > 2 ? 'border-bottom-no' : ''} ${index === 2 || index === 5 ? 'border-right-no' : ''}`}>
                <a href={ad.link}>
                  <p className="name">{ad.title}</p>
                  <img src={ad.img} alt=""/></a>
              </li>)
            })
          }
        </ul>
      </div>
    )
  }
}
export default HomeAds;