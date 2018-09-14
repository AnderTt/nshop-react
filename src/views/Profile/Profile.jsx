import React,{Component} from 'react';
import yc from '../../assets/images/yanxuan.png'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import './css/index.styl'
class Profile extends Component{
    state = {
        isShow : false, //是否显示具体的登录方式，默认不现实
        isPhone : true //是否要显示手机的具体登录方式
    }
    handlePhoneClick=()=>{
        const {isShow} = this.state
        this.setState({
            isShow : !isShow
        })
    }
    handleMailClick=()=>{
        const {isShow,isPhone} = this.state
        this.setState({
            isShow : !isShow,
            isPhone : false
        })
    }
    otherLogin=()=>{
        //重置状态为初始值
        const {isShow,isPhone} = this.state
        this.setState({
            isShow : false,
            isPhone : true
        })
    }
    toLogin=()=>{
        if(this.state.isPhone){
            //前台短信登陆验证
            const phoneReg = /^1\d{10}/;
            if(!phoneReg.test(this.phone)){
               alert('请输入正确的电话号码');
                return
            }else if(!/^\d{6}$/.test(this.yzm)){
                alert('请输入正确的短信验证码');
                return
            }
        }else {
            //邮箱登录
            const mailReg =/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
            if(!mailReg.test(this.mail)){
                alert('请输入正确的邮箱');
                return
            }else if(!/^\d{6}$/.test(this.pwd)){
                alert('请输入正确的密码');
                return
            }
        }
    }
    render(){
        const {isShow,isPhone} = this.state
        return (
            <div className="profileContainer">
                <div className="pc_wrapper">
                    <HeaderTop/>
                    <div className="pc_con">
                        <div className="login">
                            <img src={yc} alt=""/>
                        </div>
                        <div className="phone_mail_login">
                            {/*登陆方式*/}
                            <div className='pm_login' style={{display : isShow ? 'none' : 'block'}}>
                                {/*登录方式*/}
                                <div className="pm_con" onClick={this.handlePhoneClick}>
                                    <div className="phone_login">
                                    <i className="iconfont icon-shouji"></i>
                                    <span>手机号码登录</span>
                                </div>
                                <div className="mail_login"  onClick={this.handleMailClick}>
                                    <i className="iconfont icon-youjian"></i>
                                    <span>邮箱账号登陆</span>
                                </div>
                                <div className="phone_fast">
                                    <span>手机快捷注册</span>
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                            {/*登陆方式的具体页面*/}
                            <div className="phone_mail_con"  style={{display : !isShow ? 'none' : 'block'}}>
                                <div className="phone_con" style={{display : isShow && !isPhone ? 'none' : 'block'}}>
                                    <div className="phone">
                                        <input type="text" placeholder="请输入手机号" ref={input => this.phone = input}/>
                                    </div>
                                    <div className="yzm">
                                        <input type="text" placeholder="请输入短信验证码" ref={input => this.yzm = input}/>
                                        <div className="huoqu">获取验证码</div>
                                    </div>
                                    <div className="text">
                                        <span>遇到问题？</span>
                                        <span>使用短信验证登录</span>
                                    </div>
                                    <div className="toLogin">
                                        <div className="phLogin"onClick={this.toLogin}>登录</div>
                                        <div className="otherLogin" onClick={this.otherLogin}>其他方式登录</div>
                                    </div>
                                    <div className="register">注册账号></div>
                                </div>
                                <div className="mail_con" style={{display : isShow && isPhone ? 'none' : 'block'}}>
                                    <div className="mail">
                                        <input type="text" placeholder="请输入邮箱账号" ref={input => this.mail = input}/>
                                    </div>
                                    <div className="yzm">
                                        <input type="text" placeholder="密码" ref={input => this.psw = input}/>
                                    </div>
                                    <div className="text">
                                        <span>注册账号</span>
                                        <span>忘记密码</span>
                                    </div>
                                    <div className="toLogin">
                                        <div className="mlLogin" onClick={this.toLogin}>登录</div>
                                        <div className="otherLogin" onClick={this.otherLogin}>其他方式登录</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login_ways" style={{display : isShow? 'none' : 'block'}} >
                            <span><i className="iconfont icon-weixin"></i>微信</span>
                            <span>|</span>
                            <span><i className="iconfont icon-qq"></i>QQ</span>
                            <span>|</span>
                            <span><i className="iconfont icon-weibo"></i>微博</span>
                        </div>
                  </div>

                </div>
            </div>
        )
    }
}
export default Profile;