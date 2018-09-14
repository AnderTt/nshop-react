import React,{Component} from 'react';
import NavFooter from '../../components/NavFooter/NavFooter'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
import  {getCategory} from '../../redux/actions'
import {connect} from 'react-redux'
class Category extends Component{
    state = {
        navIndex : 0
    };
    componentDidMount(){
      this.props.getCategory()
    }
    changeIndex=(index)=>{
       this.setState({
           navIndex : index
       })
    }

    render(){
        const category = this.props.category ? this.props.category : [];
        const navIndex = this.state.navIndex;
        if(!category[navIndex]){
            return <div>loading</div>
        }
        return (
            <div className="categoryContainer">
                <div className="cc_wrapper">
                    <header className="cc_hd">
                        <div className="hd_con">
                            <i className="iconfont icon-sousuo"></i>
                            <span className="text">搜索商品, 共13256款好物</span>
                        </div>
                    </header>
                    <section className="cc_con">
                        <CategoryLeft category={category} changeIndex={this.changeIndex} navIndex={navIndex}/>
                        <CategoryRight cateList={category[navIndex]} subCateList={category[navIndex].subCateList}/>
                    </section>
                </div>
                <NavFooter/>
            </div>
        )
    }
}
export default connect(
    state=>({category : state.category}),
    {getCategory}
)(Category);