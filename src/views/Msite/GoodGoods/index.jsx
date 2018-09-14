import React,{Component} from 'react';
import PropTypes from 'prop-types'
class GoodGoods extends Component{
    static propsTypes = {
        cateList : PropTypes.array.isRequired
    };
    render(){
        const cateList = this.props.cateList ? this.props.cateList: [];
        return (
            <section className="goods_list">
                {
                    cateList.map((cates,index)=> {
                        console.log(cates.itemList,'cates.itemList')
                        return (
                            <div className="gl_item" key={index}>
                                <h3>{cates.name}好物</h3>
                                <ul className="gl_list" >
                                    {
                                        cates.itemList.slice(0,5).map((cate,index)=>{
                                            return (
                                                <li key={index}>
                                                    <a href="javascript:;">
                                                        <div className="gl_hd">
                                                            <img src={cate.listPicUrl} alt=""/>
                                                            <p className="description ellipsis"><span>{cate.simpleDesc}</span></p>
                                                        </div>
                                                        <div className="gl_tag">
                                                            <span>满折</span>
                                                        </div>
                                                        <div className="gl_title ellipsis">{cate.name}</div>
                                                        <div className="gl_price">￥{cate.retailPrice}</div>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }

                                    <li className="more">
                                        <a href="javascript:;">
                                            <p>居家好物</p>
                                            <span className="icon"><i className="iconfont icon-guanbi01"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }

            </section>
        )
    }
}
export default GoodGoods;