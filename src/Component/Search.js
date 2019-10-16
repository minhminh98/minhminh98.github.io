import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      tempvalue:"",
      doituong:{}
    }
  }
  getUserInfo=(item)=>{
    this.setState({
        doituong: item
    });
    this.props.getEditUserInfo(item)
    
  }
  HienthiEdit=()=>{
    if(this.props.editUserStatus === true){
          return( <EditUser endedituser={this.props.EndEditUser}
          userEdit2={this.props.userEdit}
          getUserInfo={(item)=>this.getUserInfo(item)}/>) 
    }
  }
  Hienthinut=()=>{
    if(this.props.trangthaiform===true){
      return(
        <div onClick={()=>this.props.ketnoi()}className="btn btn-block btn-outline-secondary ">Đóng lại</div>
      )
      
    }
    else{
      return(
        <div onClick={()=>this.props.ketnoi()}className="btn btn-block btn-outline-info ">Thêm mới</div>

      )
    }
  }
  isChange=(event)=>{

    this.setState({
      tempvalue: event.target.value
    })
    this.props.checkconnect(this.state.tempvalue)
  }
    render() {
     
      
        return (
            
                <div className="col-12">
                  <div className="row">
                  {this.HienthiEdit()}
                  </div>
  <div className="form-group">
    <div className="btn-group">
      <input onChange={(event)=>this.isChange(event)}style={{width: '500px'}} type="text"  className="form-control" placeholder="Nhập tên cần tìm" aria-describedby="helpId" />
      <div onClick={(dl)=>this.props.checkconnect(this.state.tempvalue)} className="btn btn-primary">Tìm</div>
    </div>   
    <div className="btn-group1">
    {this.Hienthinut()}
    </div>              
  </div>
  <hr/>
</div>

          
        );
    }
}

export default Search;