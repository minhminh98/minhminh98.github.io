import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permission: 0
    }
  }
  
  isChange=(event)=>{
    const name= event.target.name;
    const value= event.target.value;
    this.setState({
      [name]: value
    });
    // var item= {};
    // item.id=this.state.id;
    // item.name=this.state.name;
    // item.tel=this.state.tel;
    // item.permission=this.state.permission;
  }
    KiemtraTT=()=>{
        if(this.props.trangthaiform===true){
            return(
              <div className="col">
                <form>
                <div className="card border-primary my-2">
                            <div className="card-header">     Thêm mới User vào hệ thống </div>               
                            <div className="card-body text-primary">
                            <div className="form-group">                                    
                               <input onChange={(event)=>this.isChange(event)} type="text" name="name" className="form-control" placeholder="User Name" aria-describedby="helpId" />                                   
                             </div>
                              <div className="form-group">                                    
                                 <input onChange={(event)=>this.isChange(event)}type="text" name="tel" className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />                                   
                              </div>
                               <div className="form-group">
                                 <select onChange={(event)=>this.isChange(event)}name="permission" className="form-control" >
                                   <option value>Chọn quyền mặc định</option>
                                   <option value={1}>Admin</option>
                                 <option value={2}>Modrador</option>
                                   <option value={3}>Normal</option>
                                </select>
                             </div>
                           <div className="form-group">
                                 <input type="reset" onClick={(name,tel,permission)=>this.props.ketnoi(this.state.name,this.state.tel,this.state.permission)}className="btn btn-block btn-primary"
                                  value="Thêm Mới"/>
                                
                               </div>
                             </div>
                          </div>
                          </form>
                          </div>
            )
        }
    }
   
    render() {       
      // console.log(this.state);
      
        return (
  <div className="card text-left">
   {this.KiemtraTT()}  
  </div>         
        );
    }
}

export default AddUser;