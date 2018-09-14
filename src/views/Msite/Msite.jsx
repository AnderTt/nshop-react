import React,{Component} from 'react';
import NavFooter from '../../components/NavFooter/NavFooter'
import Banner from './Banner/Banner'
import logo from '../../assets/images/logo.png'
import Split from '../../components/Spilt/Spilt'
import {connect} from 'react-redux'
import {getHome} from '../../redux/actions'
import BScroll from 'better-scroll'
import GoodsSupply from './GoodsSupply'
import NewGoods from './NewGoods'
import PopularGoods from './PopularGoods'
import SpecialGoods from './SpecialGoods'
import GoodGoods from './GoodGoods'
import fuli from '../../assets/images/fuli.jpg'
class Msite extends Component{
    state = {
        tabs : ['推荐','居家','鞋包配饰','服装','电器','洗护','餐饮','婴童','文体','特色区'],
        currentIndex : 0
    };
    componentDidMount(){
        this.props.getHome();
        this._initBScroll();
    };
    _initBScroll=()=>{
        new BScroll('.mc_tabs',{
            click: true,
            scrollX : true
        })
    };
    changeColor=(index)=>{
        this.setState({
            currentIndex : index
        })
    };
    render(){
        const {tabs,currentIndex} = this.state;
        return (
            <div className="msiteContainer">
                {/*头部*/}
                <div className="header_top">
                    <section className="mc_header">
                        <h1 className="logo"><img src={logo} alt="gogo"/></h1>
                        <div className="search">
                            <i className="iconfont icon-sousuo"></i>
                            <span>搜索商品, 共13097款好物</span>
                        </div>
                    </section>
                    <section className="mc_tabs">
                        <div className="mt_list">
                            {
                                tabs.map((item,index)=>{
                                   return <span className={currentIndex===index ? 'span-item on' : 'span-item'} key={index} onClick={()=>this.changeColor(index)}>{item}</span>
                                })
                            }

                        </div>
                    </section>
                </div>
                <Banner focusList={this.props.home.focusList}/>
                {/*banner下小导航*/}
                <div className="nav_bar">
                    <span className="nb_item">
                      <i className="iconfont icon-down"></i>
                      网易自营品牌
                    </span>

                    <span className="nb_item">
                      <i className="iconfont icon-down"></i>
                      30天无忧退货
                    </span>

                    <span className="nb_item">
                      <i className="iconfont icon-down"></i>
                      48小时快速退款
                    </span>
                </div>
                {/*空白*/}
                <Split/>
                {/*内容去*/}
                <div className="mc_con">
                    <GoodsSupply tagList={this.props.home.tagList}/>
                    {/*空白*/}
                    <Split/>
                    {/*新品*/}
                    <NewGoods newItemNewUserList={this.props.home.newItemNewUserList}/>
                    {/*空白*/}
                    <Split/>
                    {/*人气*/}
                    <PopularGoods popularItemList={this.props.home.popularItemList}/>
                    {/*空白*/}
                    <Split/>
                    {/*福利推荐*/}
                    <section className="fuli">
                        <div className="fl_img">
                            <a href="javascript:;">
                                <img src={fuli} alt=""/>
                            </a>
                        </div>
                    </section>
                    {/*空白*/}
                    <Split/>
                    {/*专题精选*/}
                    <SpecialGoods topicList={this.props.home.topicList}/>
                    {/*空白*/}
                    <Split/>
                    {/*居家好物*/}
                    <GoodGoods cateList={this.props.home.cateList}/>
                </div>
                <NavFooter/>
            </div>

        )
    }
}
export default connect(
    state =>({
      home:state.home
    }),
    {getHome}
)(Msite)