import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Header extends Component {
	ButtonLogin = () => {
		if(sessionStorage.getItem('login')){
			return <Link className="btn btn-dark" to="/controlpanel">Bảng điều khiển</Link>
		}else{
			return <Link className="btn btn-dark" to="/login">Đăng Nhập</Link>
		}
	}
	render() {
		return (
			
			<div className="row row1">	
				<div className="col-md-3">
					<Link to="/">
						<img src="/images/logo.png" alt="anh1" className="img-thumbnail anh1" />
					</Link>
				</div>
				<div className="col-md-2"/>
				<div className="col-md-7 mh text-center ">
					<ul>
						<li><Link to="/" className="text-dark">TRANG CHỦ</Link></li>
						<li ><Link to="/gioithieu" className="text-dark" >GIỚI THIỆU</Link></li>
						<li><Link to="/gopy" className="text-dark">GÓP Ý</Link></li>
					</ul>
					{this.ButtonLogin()}
				</div>	
			</div>
		);
	}
}

export default Header;