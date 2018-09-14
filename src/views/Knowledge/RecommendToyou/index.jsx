import React,{Component} from 'react';
import PropTypes from 'prop-types'
class RecommendToyou extends Component{
    static propsTypes = {
        recommend : PropTypes.object.isRequired
    }
  render(){
    const recommend = this.props.recommend ? this.props.recommend : {}
    if(!recommend.Item){
        return <div>loading</div>
    }
    return (
        <div className="kc_tuijian">
            <section className="fy_goods">
                <header className="fy_header">{recommend.name}</header>
                <div className="fyg_good">
                    <a href="javascript:;">
                        <div className="fy_img">
                            <img src={recommend.Item[0].picUrl} alt=""/>
                            <div className="tag">{recommend.Item[0].typeName}</div>
                        </div>
                        <div className="fy_text">
                            <div className="top">
                                <h5>{recommend.Item[0].title}</h5>
                                <p className="price">{recommend.Item[0].priceInfo}元起</p>
                            </div>
                            <div className="decs">
                                {recommend.Item[0].subTitle}
                            </div>
                        </div>
                    </a>
                </div>
                <div className="fy_conments">
                    <div className="fy_conment">
                        <div className="fyc_text">
                            <div className="author">
                                <img src={recommend.Item[1].avatar} alt=""/>
                                <span className="nickName">{recommend.Item[1].nickname}</span>
                            </div>
                            <div className="article">
                                <h5 className="article_tltle">
                                    {recommend.Item[1].title}
                                </h5>
                                <h5 className="article_con">
                                    {recommend.Item[1].subTitle}
                                </h5>
                            </div>
                        </div>
                        <div className="fyc_img">
                            <img src={recommend.Item[1].picUrl} alt=""/>
                        </div>
                    </div>
                    <div className="fy_conment">
                        <div className="fyc_text">
                            <div className="author">
                                <img src={recommend.Item[2].avatar} alt=""/>
                                <span className="nickName">{recommend.Item[2].nickname}</span>
                            </div>
                            <div className="article">
                                <h5 className="article_tltle">
                                    {recommend.Item[2].title}
                                </h5>
                                <h5 className="article_con">
                                    {recommend.Item[2].subTitle}
                                </h5>
                            </div>
                        </div>
                        <div className="fyc_img">
                            <img src={recommend.Item[2].picUrl} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}
export default RecommendToyou;