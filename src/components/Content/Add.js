import React, {Component} from 'react';
import axios from 'axios';
import HeaderAdmin from '../Layout/HeaderAdmin';
import Topbar from '../Layout/Topbar';
import FooterAdmin from '../Layout/FooterAdmin';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Add extends Component {
	constructor(props){
    super(props);
      this.state = {
        id: "",
        tensp: "",
        gia: "",
        giakm: "",
        hinhanh: "",
        tendm: "",
        model: "",
        mota: "",
        kieuloai: "",
        thuonghieu: "",
        tinhtranghang: "",
        trangthai: ""
      }
    }
    componentDidMount(){
      var {match} = this.props;
      if (match) {
        var id = match.params.id;
        axios({
          method: 'GET',
          url :`http://localhost:3000/products/${id}`,
          data : null
        }).then(res =>{
          var data =res.data;
          this.setState({
            id: data.id,
            tensp: data.tensp,
            gia: data.gia,
            giakm: data.giakm,
            hinhanh: data.hinhanh,
            tendm: data.tendm,
            model: data.model,
            kieuloai: data.kieuloai,
            thuonghieu: data.thuonghieu,
            mota: data.mota,
            tinhtranghang: data.tinhtranghang,
            trangthai: data.trangthai
          });
        }).catch( err =>{
        });
      }
    } 
    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type =target.type;
      var value =target.value;
      if (name === 'tinhtranghang') {
        value =target.value === 'true' ? true :false;
      }
      if (type === 'file') {
        value = this.hinhanh.value.replace( /C:\\fakepath\\/i, "/images/" );
      }
      this.setState({
        [name] : value,
      });
    }
    onSave =(e) =>{
      e.preventDefault();
      var { id, tensp, gia, giakm, hinhanh , tendm, model, kieuloai, mota, matkinh, thuonghieu, tinhtranghang, trangthai} = this.state;
       var {history} = this.props;
       if (id) {
         axios({
           method: 'PUT',
           url :`http://localhost:3000/products/${id}`,
           data : {
            tensp: tensp,
            gia: gia,
            giakm: giakm,
            hinhanh: hinhanh,
            tendm: tendm,
            model: model,
            mota: mota,
            kieuloai: kieuloai,
            matkinh: matkinh,
            thuonghieu: thuonghieu,
            tinhtranghang: tinhtranghang,
            trangthai: trangthai
           }
         }).then(res =>{
           history.push("/productlist");
         });
       }else{
         axios({
           method: 'POST',
           url :'http://localhost:3000/products',
           data : {
            tensp: tensp,
            gia: gia,
            giakm: giakm,
            hinhanh: hinhanh,
            tendm: tendm,
            model: model,
            mota: mota,
            kieuloai: kieuloai,
            matkinh: matkinh,
            thuonghieu: thuonghieu,
            tinhtranghang: tinhtranghang,
            trangthai: trangthai
           }
         }).then(res =>{
           history.push("/productlist");
         });
       }
     } 
    onClear = () =>{
      this.setState({
        tensp : '',
        gia : '',
        giakm : '',
        hinhanh : '',
        tendm : '',
        model : '',
        kieuloai : '',
        mota : '',
        thuonghieu : '',
        tinhtranghang : '',
        trangthai: '',
      });
    }
    render() {
    if(sessionStorage.getItem('login')){
  	return (
      <div>
        <div id="wrapper">
          <HeaderAdmin/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar/>
              <div className="container-fluid">
              <div className="panel panel-warning col-md-8 mx-auto">
        <div className="panel-heading">
          <h3 className="panel-title mt-3 text-info">Sản phẩm</h3>
        </div>
          <div className="panel-body">
            <form onSubmit = {this.onSave}>
              <div className="form-group">
                <label>Tên Sản phẩm :</label>
                <input type="text" name="tensp" value ={this.state.tensp} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Giá Sản phẩm :</label>
                <input type="number" name="gia" value ={this.state.gia} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Giá Khuyến Mãi :</label>
                <input type="number" name="giakm" value ={this.state.giakm} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Chọn Ảnh :</label>
                <input type="file" name="hinhanh" ref ={ (input) => { this.hinhanh = input} } onChange ={this.onChange} className="form-control" />
              </div><br/>
              <div className="form-group">
                <label>Danh mục sản phẩm</label>
                <select className="form-control" name ="tendm" value ={this.state.tendm} onChange ={this.onChange} required="required">
                  <option>Chọn</option>
                  <option value="1">Bộ Trang sức cao cấp</option>
                  <option value="2">Trang sức cao cấp</option>
                  <option value="3">Bộ trang sức đẹp và tinh tế</option>
                </select>
              </div>
              <div className="form-group">
                <label>Model :</label>
                <input type="text" name="model" value ={this.state.model} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Kiểu loại :</label>
                <input type="text" name="kieuloai" value ={this.state.kieuloai} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Thương hiệu :</label>
                <input type="text" name="thuonghieu" value ={this.state.thuonghieu} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Mô tả sản phẩm :</label>
                <textarea type="textarea" name="mota" rows="5" value ={this.state.mota} onChange ={this.onChange} className="form-control" />
              </div>
              <label>Tình trạng hàng :</label>
              <select className="form-control" name ="tinhtranghang" value ={this.state.tinhtranghang} onChange ={this.onChange}>
                <option>Chọn</option>
                <option value={true}>Còn hàng</option>
                <option value={false}>Hết hàng</option>
              </select>
              <div className="form-group">
                <label>Trạng thái:</label>
                <select className="form-control" name ="trangthai" value ={this.state.trangthai} onChange ={this.onChange} required="required">
                  <option>Chọn</option>
                  <option value="M">Sản phẩm mới</option>
                  <option value="H">Sản phẩm bán chạy</option>
                  <option value="KM">Sản phẩm khuyến mãi</option>
                </select>
              </div>
              <br />
              <div className="text-center">
                <button type="submit"  className="btn btn-primary">Lưu</button>&nbsp;
                <button type="button" onClick={this.onClear} className="btn btn-danger">Clear</button>
              </div>
            </form>
            <Link to="/" className="btn btn-success">Trở lại</Link>
            <hr></hr>
          </div>
          </div>
          </div>
        </div>
        <FooterAdmin/>
      </div>
      </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    );
    }else{
      return <h3 className="text-center text-danger">Bạn không có quyền truy cập trang này!</h3>
    }
	}
}

export default Add;