import React,{Component} from 'react';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
class NewGoods extends Component{
    static propsTypes = {
        popularItemList : PropTypes.array.isRequired
    };
    /*页面第二次渲染完后再*/
    componentDidUpdate(){
        this._initBScroll();
    }
    _initBScroll=()=>{
        new BScroll('.rg_list', {
            click : true,
            scrollX : true
        })
    }
    render(){
        const  popularItemList = this.props.popularItemList ? this.props.popularItemList : []
        return (
            <section className="recommend_goods">
            <header className="rg_header">
                <a href="javascript:;">
                    <p>人气推荐，好物精选</p>
                    <div className="look_all">
                        <span>查看所有</span><i className="iconfont icon-arrow-right"></i>
                    </div>
                </a>
            </header>
            <section className="rg_list">
                <ul className="rgUl">
                    {
                        popularItemList.map(popularItem=>{
                            return (
                                <li key={popularItem.id}>
                                    <a href="javascript:;" className="rg_good">
                                        <img src={popularItem.primaryPicUrl} alt=""/>
                                        <div className="rg_text">
                                            <h3 className=" ellipsis">{popularItem.name}</h3>
                                            <p className=" ellipsis">{popularItem.simpleDesc}</p>
                                            <p className="price">￥{popularItem.retailPrice}</p>
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