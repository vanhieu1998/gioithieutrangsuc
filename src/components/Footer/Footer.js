import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class Footer extends Component {
	render() {
		return (
			<div className="row row12">	
				<div className="col-md-3 mx-auto">
					<h6>CÔNG TY TNHH Vàng Bạc Đá Qúy</h6>					
					<p>Số 11, đường Xô Viết Nghệ Tĩnh</p>
					<p>Tổng đài hỗ trợ: 0909678944</p>
					<p>Từ 7h00 - 22h00 các ngày thứ 2 đến chủ nhật</p>
					<Link to="/">vanhieu98@gmail.com</Link>
				</div>									
			</div>
		);
	}
}

export default Footer;