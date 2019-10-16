import React, { Component } from 'react';

class TableDataRow extends Component {
    Permission=()=>{
        // return()
        if(this.props.permission === "1"){  return"Admin"; }
        else if(this.props.permission === "2"){ return"Moderator"; }
        else{ return"Normal"}
    }
    EditClick=()=>{
        this.props.edit2();
        this.props.endedituser2()
    }
    delButton=(idUser)=>{
        this.props.delButton(idUser)
        
    }
    render() {
        return (
           
                 <tr>
                    <td >{this.props.stt+1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.Permission()}</td>
                    <td>
                    <div className="btn-group">
                        <div onClick={()=>this.EditClick()} className="btn btn-info sua">
                        <i className="fa fa-edit" /> Sửa
                        </div>
                        <div onClick={(idUser)=>this.delButton(this.props.id)}className="btn btn-warning xoa">Xóa</div>
                    </div>                                 
                    </td>
                </tr>
           
        );
    }
}

export default TableDataRow;