import React,{Component} from 'react';
import PropTypes from 'prop-types'
class BestGoods extends Component{
    static propsTypes = {
        zhen : PropTypes.object.isRequired,
    };

    render(){
        const zhen = this.props.zhen ? this.props.zhen : {};
        if(!zhen.Item){
            return <div>loading</div>
        }
        return (
            <div className="kc_tuijian">
                <section className="fy_goods">
                    <header className="fy_header">{zhen.name}</header>
                    <div className="fyg_good">
                        <a href="javascript:;">
                            <div className="fy_img">
                                <img src={zhen.Item[2].picUrl} alt=""/>
                                <div className="tag">{zhen.Item[2].typeName}</div>
                            </div>
                            <div className="fy_text">
                                <div className="top">
                                    <h5>{zhen.Item[2].title}</h5>
                                    <p className="price">{zhen.Item[2].priceInfo}元起</p>
                                </div>
                                <div className="decs">
                                    {zhen.Item[2].subTitle}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="fy_conments">
                        <div className="fy_conment">
                            <div className="fyc_text">
                                <div className="author">
                                    <img src={zhen.Item[1].avatar} alt=""/>
                                    <span className="nickName">{zhen.Item[1].nickname}</span>
                                </div>
                                <div className="article">
                                    <h5 className="article_tltle ellipsis">
                                        {zhen.Item[1].title}
                                    </h5>
                                    <h5 className="article_con">
                                        {zhen.Item[1].subTitle}
                                    </h5>
                                </div>
                            </div>
                            <div className="fyc_img">
                                <img src={zhen.Item[1].picUrl} alt=""/>
                            </div>
                        </div>
                        <div className="fy_conment">
                            <div className="fyc_text">
                                <div className="author">
                                    <img src={zhen.Item[0].avatar} alt=""/>
                                    <span className="nickName">{zhen.Item[0].nickname}</span>
                                </div>
                                <div className="article">
                                    <h5 className="article_tltle ellipsis">
                                        {zhen.Item[0].title}
                                    </h5>
                                    <h5 className="article_con">
                                        {zhen.Item[0].subTitle}
                                    </h5>
                                </div>
                            </div>
                            <div className="fyc_img">
                                <img src={zhen.Item[0].picUrl} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default BestGoods;