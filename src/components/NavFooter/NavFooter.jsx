import React, { Component } from 'react'
import '../../assets/css/index.styl'
import {withRouter} from 'react-router-dom'
class NavFooter extends Component {
    tabSwitch=(path)=>{
        this.props.history.replace(path)
    }
    render() {
        return (
            (
                <footer className="footer_guide" >
                        <span className={this.props.location.pathname ==='/msite' || this.props.location.pathname ==='/' ? 'guide_item on' : 'guide_item'} onClick={()=>this.tabSwitch('/msite')} >
                            <span className="item_icon">
                            <i className="iconfont icon-shouye"></i>
                        </span>
                        <span>首页</span>
                    </span>
                    <span className={this.props.location.pathname ==='/knowledge'? 'guide_item on' : 'guide_item'} onClick={()=>this.tabSwitch('/knowledge')} >
                        <span className="item_icon">
                            <i className="iconfont icon-bd-"></i>
                        </span>
                        <span>识物</span>
                    </span>
                    <span className={this.props.location.pathname ==='/category'? 'guide_item on' : 'guide_item'} onClick={()=>this.tabSwitch('/category')} >
                        <span className="item_icon">
                            <i className="iconfont icon-icon"></i>
                        </span>
                        <span>分类</span>
                    </span>
                    <span className={this.props.location.pathname ==='/shopCart'? 'guide_item on' : 'guide_item'} onClick={()=>this.tabSwitch('/shopCart')} >
                        <span className="item_icon">
                            <i className="iconfont icon-gouwuchekong"></i>
                         </span>
                        <span>购物车</span>
                    </span>
                    <span className={this.props.location.pathname ==='/profile'? 'guide_item on' : 'guide_item'} onClick={()=>this.tabSwitch('/profile')} >
                        <span className="item_icon">
                            <i className="iconfont icon-geren"></i>
                        </span>
                        <span>我的</span>
                    </span>
                </footer>
            )
        )
    }
}
export default withRouter(NavFooter)