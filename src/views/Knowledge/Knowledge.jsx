import React,{Component} from 'react';
import NavFooter from '../../components/NavFooter/NavFooter'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import {connect} from 'react-redux'
import {getKnowledge} from '../../redux/actions'
import Banner from './Banner'
import Split from '../../components/Spilt/Spilt'
import RecommendToyou from './RecommendToyou'
import Ten from './Ten'
import BestGoods from './BestGoods'
import More from './More'


class Knowledge extends Component{
    componentDidMount(){
      this.props.getKnowledge();
      console.log( this.props,'----1');
    }
    render(){
        const knowledge = this.props.knowledge ? this.props.knowledge : {};
        if(!knowledge.yxLook){
            return <div>loading</div>
        }
        console.log(knowledge.yxLook.picUrl,'knowledge')
        return (
            <div className="knowledgeContainer">
                <HeaderTop/>
                <div className="kc_container">
                    {/*轮播图/tabs*/}
                    <Banner banner={this.props.knowledge.banner} column={this.props.knowledge.column}/>
                    {/*空白*/}
                    <Split/>
                    {/*为你推荐*/}
                    <RecommendToyou recommend={this.props.knowledge.recommend} />
                    {/*空白*/}
                    <Split/>
                    {/*十点一刻*/}
                    <Ten tenfifteen = {this.props.knowledge.tenfifteen}/>
                    {/*空白*/}
                    <Split/>
                    {/*严选甄品*/}
                    <BestGoods zhen = {this.props.knowledge.zhen}/>
                    {/*空白*/}
                    <Split/>
                    {/*严选look*/}
                    <div className="yc_look">
                        <section className="look_con">
                            <header className="lc_title">严选Look</header>
                            <div className="lc_wrapper">
                                <div className="lc_look">
                                    <img src={knowledge.yxLook.picUrl} alt=""/>
                                </div>
                                <div className="lc_content">
                                    <div className="author">
                                        <img src={knowledge.yxLook.avatar} alt=""/>
                                            <div className="nickName">{knowledge.yxLook.nickname}</div>
                                    </div>
                                    <div className="comment">{knowledge.yxLook.content}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/*更多精彩*/}
                    <More yxWeek = {this.props.knowledge.yxWeek}/>
                </div>
                <i className="goTop"></i>
                <NavFooter/>
            </div>
        )
    }
}
export default connect(
    state=>({knowledge : state.knowledge}),
    {getKnowledge}
)(Knowledge);