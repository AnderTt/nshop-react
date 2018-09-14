import React,{Component} from 'react';
import PropTypes from 'prop-types'
class CategoryLeft extends Component{
    static propsTypes = {
        category : PropTypes.array.isRequired,
        changeIndex : PropTypes.func.isRequired,
        navIndex : PropTypes.number.isRequired
    };
    handleClick(index){
        console.log(index);
        this.props.changeIndex(index)
    }
    render(){
        const {category,navIndex} = this.props
        return (
            <div className="cc_left">
                <div className="ccl_con">
                    <ul className="ccl_list">
                        {
                            category.map((item,index)=> {
                                return (
                                    <li className={navIndex===index ? 'li_item on' : 'li_item'}  key={index} onClick={()=>this.handleClick(index)}>
                                        <span>{item.name}</span>
                                        <div className="red_block"></div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }
}
export default CategoryLeft;