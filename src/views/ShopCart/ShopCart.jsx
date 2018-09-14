import React,{Component} from 'react';
import NavFooter from '../../components/NavFooter/NavFooter'
import './css/index.styl'
class ShopCart extends Component{
  render(){
    return (
        <div className="shopCartContainer">
            <div className="ssc_con">
                <header className="ssc_hd">
                    <span className="title">购物车</span>
                    <span className="coupon">领券</span>
                </header>
                <section className="ssc_con">
                    <div className="ssc_activities">
                        <ul className="sscUl">
                            <li>
                                <i className="iconfont icon-xiaoyuanquan"></i>
                                <span>30天无忧退货</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiaoyuanquan"></i>
                                <span>48小时快速退款</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiaoyuanquan"></i>
                                <span>满88元免邮费</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cart">
                        <div className="cart_con">
                            <div className="img"></div>
                            <div className="add_login">
                                <p className="add">去添加点什么吧</p>
                                <div className="login">登录</div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <NavFooter/>
        </div>
    )
  }
}
export default ShopCart;