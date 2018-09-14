import React,{Component} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
class Banner extends Component{
    static propsTypes = {
        banner : PropTypes.array.isRequired,
        column : PropTypes.array.isRequired,
    };
    /*这里不用在componentDidUpdate中创建swiper/BScroll对象，应为在父组件的时候已经做了判断，
    到自组建的时候，已经是最新的数据*/
    componentDidMount(){
        this._initSwiper();
        this._initBScroll();
    }
    /*/!*页面第二次渲染完创建Swiper对象*!/
    componentDidUpdate(){
        this._initSwiper();
        this._initBScroll();
    }*/
    _initSwiper=()=>{
        new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 10,
            loop : true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    };
    _initBScroll=()=>{
        new BScroll('.kcc_tabs', {
            click : true,
            scrollX : true
        })
    }
    render(){
        const banner = this.props.banner ? this.props.banner : [];
        const column = this.props.column ? this.props.column : [];
        return (
            <div>
                <section className="swiper-container" >
                <div className="swiper-wrapper">
                    {
                        banner.map((item,index)=> {
                            return (
                                <a className="swiper-slide" key={index} >
                                    <img src={item.picUrl} />
                                    <div className="content">
                                        <div className="subTitle">-{item.subTitle}-</div>
                                        <div className="title">{item.title}</div>
                                        <div className="desc">{item.desc}</div>
                                    </div>
                                </a>
                            )
                        })
                    }

                </div>
            </section>
                <section className="kcc_tabs">
                    <ul className="kcc_list">
                        {
                            column.map((item,index)=>{
                                return (<li key={index}>
                                    <a href="javascript:;">
                                         <div className="header_text" style={{backgroundImage : "url("+ item.picUrl +")"}}>
                                             <p className="titleCount  ellipsis">{item.articleCount}</p>
                                         </div>
                                        <div className="title ellipsis">{item.title}</div>
                                    </a>
                                </li>)
                            })
                        }

                    </ul>
                </section>
            </div>
        )
    }
}
export default Banner;