import React, {Component} from 'react'
import '../pages/Login.css';
import { Link } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }
    onLogin() {
        console.log("start sign in");
    }
    
    onRegister() {
        console.log("start regsiter"); 
    }

    render() {
        return (
            <div className="login-page">
                <div className="form" ref="formRef">
                    <form className="register-form">
                        <input type="text" placeholder="用户名" />
                        <input type="password" placeholder="密码" />
                        <input type="text" placeholder="电话／邮箱" />
                        <button onClick={this.onRegister}>创建账号</button>
                        <p className="message">我已经注册? <a >登录账号</a></p>
                    </form>
                    <form className="login-form">
                        <input type="text" placeholder="用户名" />
                        <input type="password" placeholder="密码" />
                        <button onClick={this.onLogin}> 登录 </button>
                        <p className="message">没有账号？<a>注册账号 </a></p>
                    </form>
                </div>
            </div>
        )
    }
}