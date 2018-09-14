import React,{Component} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper'
class Banner extends Component{
  /*state={
      focusList : []
     };
    componentWillReceiveProps(nextProps){
        console.log(nextProps,'componentWillReceiveProps()');
        this.setState({
            focusList : nextProps.focusList
        })
    }*/
    static propsTypes = {
      focusList : PropTypes.array.isRequired
    };
    componentDidMount(){
        if(!this.sw){
            this.sw=this._initSwiper();
        }
    }
    /*页面第二次渲染完后再*/
    componentDidUpdate(){
        if(!this.sw){
            this.sw=this._initSwiper();
        }
    }
    _initSwiper=()=>{
        new Swiper('.swiper-container', {
            loop: true,
            autoplay : true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render(){
        const focusList = this.props.focusList ? this.props.focusList : [];
        return (
          <div className="swiper-container">
              <div className="swiper-wrapper">
                  {
                      focusList.map((item,index)=>{
                          return (
                            <div className="swiper-slide" key={index}><img src={item.picUrl} /></div>
                          )
                      })
                  }

              </div>
              {/*如果需要分页器*/}
              <div className="swiper-pagination"></div>
          </div>
        )
    }
}
export default Banner;