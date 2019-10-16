import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEdit2.id,
            name:this.props.userEdit2.name,
            tel:this.props.userEdit2.tel,
            permission:this.props.userEdit2.permission,
           
        }
    }
    saveButton=()=>{
        var item={};
        item.id=this.state.id;
        item.name=this.state.name;
        item.tel=this.state.tel;
        item.permission=this.state.permission;
        
        this.props.getUserInfo(item)
        this.props.endedituser()
    }
    isChane=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="col-12">
            <form>
            <div className="card text-white bg-warning  my-2">
                        <div className="card-header text-center"> Sửa thông tin User </div>               
                        <div className="card-body text-primary">
                        <div className="form-group">                                    
                           <input onChange={(event)=>this.isChane(event)}defaultValue={this.props.userEdit2.name} type="text" name="name" className="form-control" placeholder="User Name" aria-describedby="helpId" />                                   
                         </div>
                          <div className="form-group">                                    
                             <input onChange={(event)=>this.isChane(event)}defaultValue={this.props.userEdit2.tel}type="text" name="tel" className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />                                   
                          </div>
                           <div className="form-group">
                             <select onChange={(event)=>this.isChane(event)}defaultValue={this.props.userEdit2.permission}name="permission" className="form-control" >
                               <option value>Chọn quyền mặc định</option>
                               <option value={1}>Admin</option>
                             <option value={2}>Modrador</option>
                               <option value={3}>Normal</option>
                            </select>
                         </div>
                       <div className="form-group">
                             <input onClick={()=>this.saveButton()}type="reset" className="btn btn-block btn-danger"
                              value="Lưu"/>
                            
                           </div>
                         </div>
                      </div>
                      </form>
                      </div>
        );
    }
}

export default EditUser;