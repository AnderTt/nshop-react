import React,{Component} from 'react';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
class SpecialGoods extends Component{
    static propsTypes = {
        topicList : PropTypes.array.isRequired
    };
    /*页面第二次渲染完后再创建BScroll对象，初始化没值，当状态更新后，父组件向子组件通过prop传递数据，代子组件接收到数据
    并渲染完成后，创建BScroll*/
    componentDidUpdate(){
        this._initBScroll();
    }
    _initBScroll=()=>{
        new BScroll('.sg_list', {
            click : true,
            scrollX : true
        })
    }
    render(){
        const topicList = this.props.topicList ? this.props.topicList : []
        return (
            <section className="special_goods">
                <header className="header">
                    <span>专题精选</span>
                    <i className="iconfont icon-guanbi01"></i>
                </header>
                <div className="sg_list">
                    <ul className="sgUl">
                        {
                            topicList.map(topicItem=> {
                                return (
                                    <li className="sg_item" key={topicItem.id}>
                                        <a href="javascript:;">
                                            <img src={topicItem.itemPicUrl} alt=""/>
                                            <div className="sg_text">
                                                <div className="top">
                                                    <h4 className="ellipsis title">{topicItem.subtitle}</h4>
                                                    <p className="price">{topicItem.priceInfo}元起</p>
                                                </div>
                                                <p className="decription">{topicItem.title}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </section>
        )
    }
}
export default SpecialGoods;