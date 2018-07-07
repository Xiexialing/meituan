import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './css/category.css';

class Category extends Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }

  render() {
    let opt = {
      /*auto: 2000,*/
      speed: 500,
      callback: (index) => {
        this.setState({
          index
        })
      }
    };
    return (
      <div className="category">
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <ul className="carousel-item">
            <li>
              <a>
                <i className="icon icon-jingdian"></i>
                景点
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-KTV"></i>
                KTV
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-gouwu"></i>
                购物
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-shenghuo"></i>
                生活服务
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-yundong"></i>
                运动健身
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-meifa"></i>
                美发
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-qinzi"></i>
                亲子
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-xiaochi"></i>
                小吃快餐
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-zizhu"></i>
                自助餐
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-jiuba"></i>
                酒吧
              </a>
            </li>
          </ul>
          <ul className="carousel-item">
            <li>
              <a>
                <i className="icon icon-jingdian"></i>
                景点
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-KTV"></i>
                KTV
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-gouwu"></i>
                购物
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-shenghuo"></i>
                生活服务
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-yundong"></i>
                运动健身
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-meifa"></i>
                美发
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-qinzi"></i>
                亲子
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-xiaochi"></i>
                小吃快餐
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-zizhu"></i>
                自助餐
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-jiuba"></i>
                酒吧
              </a>
            </li>
          </ul>
          <ul className="carousel-item">
            <li>
              <a>
                <i className="icon icon-jingdian"></i>
                景点
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-KTV"></i>
                KTV
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-gouwu"></i>
                购物
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-shenghuo"></i>
                生活服务
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-yundong"></i>
                运动健身
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-meifa"></i>
                美发
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-qinzi"></i>
                亲子
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-xiaochi"></i>
                小吃快餐
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-zizhu"></i>
                自助餐
              </a>
            </li>
            <li>
              <a>
                <i className="icon icon-jiuba"></i>
                酒吧
              </a>
            </li>
          </ul>
        </ReactSwipe>
        <ul className="pages">
          <li className={this.state.index === 0 ? 'active' : ''}></li>
          <li className={this.state.index === 1 ? 'active' : ''}></li>
          <li className={this.state.index === 2 ? 'active' : ''}></li>
        </ul>
      </div>
    )
  }
}
export default Category;