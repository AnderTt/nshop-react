import React,{Component} from 'react';
import PropTypes from 'prop-types'
import avatar from '../../../assets/images/avatar_01.png'
import BScroll from 'better-scroll'
class Ten extends Component{
    static propsTypes = {
        tenfifteen : PropTypes.array.isRequired
    };
    componentDidMount(){
        if(!this.BS){
            this._initBScroll();
        }

    }
    /*页面第二次渲染完后再*/
    componentDidUpdate(){
        if(!this.BS) {
            this._initBScroll()
        }
    }
    _initBScroll=()=>{
        this.BS = new BScroll('.toq_wrapper', {
            click : true,
            scrollX : true
        })
    }
    render(){
        const tenfifteen = this.props.tenfifteen ? this.props.tenfifteen : [];
        console.log(tenfifteen);
        return (
            <section className="ten_past_quarter">
                <header className="tpq_header">十点一刻</header>
                <div className="toq_wrapper">
                    <ul className="tpq_list">
                        {
                            tenfifteen.map((item,index)=>{
                                return (
                                    <li className="today_session" key={index}>
                                        <p className="today">-今日话题-</p>
                                        <h5 className="session">{item.desc}</h5>
                                        <p className="utils">{item.title}</p>
                                        <div className="avatar">
                                            <div className="avatar_images">
                                                <div className="ai_item">
                                                    <img src={avatar} alt=""/>
                                                </div>
                                                {
                                                    item.participantAvatar.map((avatar,index)=>{
                                                        return (
                                                        <div className="ai_item" key={index} style={{display : (/(.jpg)$/).test(avatar) ? 'block' : 'none' }}>
                                                            <img src={avatar} alt=""/>
                                                        </div>
                                                        )
                                                    })
                                                }

                                                <div className="ai_item">
                                                    <i className="iconfont icon-shenglvehao"></i>
                                                </div>
                                            </div>
                                            <p>978人参与话题</p>
                                        </div>
                                    </li>
                                )
                            })
                        }

                        <li className="look_more">
                            查看更多好题
                            <i className="iconfont icon-guanbi01"></i>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Ten;