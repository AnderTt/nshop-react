import React,{Component} from 'react';
import PropTypes from 'prop-types'
class More extends Component{
    static propsTypes = {
        yxWeek : PropTypes.array.isRequired
    }
    render(){
        const yxWeek = this.props.yxWeek ? this.props.yxWeek : [];
        return (
            <div className="more_exciting">
                <div className="me_title">
                    <div className="me_text">
                        <p className="text">更多精彩</p>
                    </div>
                </div>
                <div className="me_content">
                    {
                        yxWeek.map((item,index)=>{
                            return (
                                <div className="me_item" key={index}>
                                    <div className="me_img">
                                        <img src={item.itemPicUrl} alt=""/>
                                    </div>
                                    <p className="title">{item.subtitle}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default More;