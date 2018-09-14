import React,{Component} from 'react';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
class NewGoods extends Component{
    static propsTypes = {
        newItemNewUserList : PropTypes.array.isRequired
    };
    /*页面第二次渲染完后再*/
    componentDidUpdate(){
        this._initBScroll();
    }
    _initBScroll=()=>{
        new BScroll('.ng_list', {
            click : true,
            scrollX : true
        })
    }
  render(){
    const  newItemNewUserList = this.props.newItemNewUserList ? this.props.newItemNewUserList : []
      return (
      <section className="new_goods">
          <header className="ng_header">
              <a href="javascript:;">
                  <p>新品首发</p>
                  <div className="look_all">
                      <span>查看所有</span><i className="iconfont icon-arrow-right"></i>
                  </div>
              </a>
          </header>
          <section className="ng_list">
              <ul className="ngUl">
                  {
                      newItemNewUserList.map((newItem,index)=> {
                          return (
                              <li key={index}>
                                  <a href="javascript:;" className="ng_good">
                                      <img src={newItem.listPicUrl} alt=""/>
                                      <div className="ng_text">
                                          <h3 className=" ellipsis">{newItem.name}</h3>
                                          <p className=" ellipsis">{newItem.simpleDesc}</p>
                                          <p className="price">￥{newItem.retailPrice}</p>
                                      </div>
                                  </a>
                              </li>
                          )
                      })
                  }

                  <li className="last_li">
                      <a href="javascript:;">
                          <p>查看全部</p>
                      </a>
                  </li>
              </ul>
          </section>
      </section>
    )
  }
}
export default NewGoods;