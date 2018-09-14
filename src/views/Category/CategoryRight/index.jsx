import React,{Component} from 'react';
import './css/index.styl'
import PropTypes from 'prop-types'
class CategoryRight extends Component{
  static propsTypes = {
      cateList : PropTypes.array.isRequired,
      subCateList : PropTypes.array.isRequired,
  }
  render(){
      const {cateList,subCateList} = this.props;
    return (
        <div className="cc_right">
            <div className="ccr_con">
                <div className="ccr_item1" style={{display : cateList.level ? 'none' : 'block'}}>
                    <div className="banner">
                        <img src={cateList.bannerUrl} alt=""/>
                    </div>
                    <div className="ccrs">
                        <ul className="ccrsUl">
                            {
                                subCateList.map((item,index)=> {
                                    return (
                                        <li key={index}>
                                            <img src={item.bannerUrl} alt=""/>
                                            <p className='ellipsis'>{item.name}</p>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className="ccr_item2" style={{display : cateList.level ? 'block' : 'none'}}>
                    <div className="banner">
                        <img src={cateList.bannerUrl} alt=""/>
                    </div>
                    <div className="ccrs">
                        <div className="ccrs_item">
                            <h6 className="item_title">当季流行</h6>
                            <ul className="itemUl">
                                {
                                    subCateList.map((item,index)=> {
                                        return (
                                            <li key={index}>
                                                <img src={item.wapBannerUrl} alt=""/>
                                                <p className='ellipsis'>{item.name}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default CategoryRight;