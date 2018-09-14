import React,{Component} from 'react';
import PropTypes from 'prop-types'
class GoodsSupply extends Component{
    static propsTypes = {
        tagList : PropTypes.array.tagList
    };
    state={
        goods : []
    }
    componentWillReceiveProps(props){
        console.log(props,"props")
        this.setState({
            goods : props.tagList.slice(0,4)
        })
    }
    render(){
        const goods = this.state.goods ? this.state.goods : [];
        console.log(goods)
        return (
          <section className="goods_suply">
              <header className="header">
                  <span>品牌制造商直供</span>
                  <i className="iconfont icon-guanbi01"></i>
              </header>
              <ul className="gs_list">
                  {
                      goods.map((item, index) => {
                          return (
                              <li key={index}>
                                  <a href="javascript:;">
                                      <div className="gs_text">
                                          <p>{item.name}</p>
                                          <p className="price">{item.floorPrice}元</p>
                                          <i className="iconfont icon-mojitianqishangxinbiaoqian"></i>
                                      </div>
                                      <img src={item.picUrl} alt=""/>
                                  </a>
                              </li>
                          )
                      })
                  }
              </ul>
          </section>
        )
    }
}
export default GoodsSupply;