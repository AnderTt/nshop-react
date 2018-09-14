import React,{Component} from 'react';
import logo from '../../assets/images/logo.png'
import {withRouter} from 'react-router-dom'
class HeaderTop extends Component{
  goTo=(path)=>{
      this.props.history.replace(path)
  };
  render(){
    return (
        <header className="kc_hd">
            <span className="icon_home span_item" onClick={()=>this.goTo('/msite')}>
              <i className="iconfont  icon-shouye"></i>
            </span>
            <span className="icon_logo  span_item">
                <img src={logo} alt=""/>
            </span>
            <span className="icon_search span_item">
                <i className="iconfont icon-sousuo"></i>
            </span>
            <span className="icon_cart span_item" onClick={()=>this.goTo('/shopCart')}>
                <i className="iconfont icon-gouwuchekong"></i>
            </span>
        </header>
    )
  }
}
export default withRouter(HeaderTop);