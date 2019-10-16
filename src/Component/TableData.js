import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  
  mappingDataUser=()=>{
   return(
     this.props.Data.map((value,key)=>{
       return(
         <TableDataRow delButton={(idUser)=>this.delButton(idUser)}endedituser2={()=>this.props.endedituser()} edit2={(user)=>this.props.edit(value)}key={key} userName={value.name} stt={key} tel={value.tel} permission={value.permission} id={value.id}/>
       )
     })
      
   )
       
    
  }
  delButton=(idUser)=>{
    this.props.delButton(idUser)
    
  }
    render() {
    
      
        return (
          
                <div className="col">
  <table className="table table-striped table-inverse table-hover">
    <thead>
      <tr>
        <th>Stt</th>
        <th>Tên</th>
        <th>Điện thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
     {
       this.mappingDataUser()
       }
     
    </tbody>
  </table>
</div>

           
        );
    }
}

export default TableData;