import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthaiform:false,
      Data: [],
      dulieu:"",
      editUserStatus: false,
      userEdit:{}
    }
  }
  
  UNSAFE_componentWillMount() {
    if(localStorage.getItem('userData')=== null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp =JSON.parse(localStorage.getItem('userData'));
      this.setState({
        Data:temp
      });
    }
  }
  
  Doitrangthai=()=>{
    this.setState({
      trangthaiform:!this.state.trangthaiform
    })
  }
 getTextSearch=(dl)=>{
 this.setState({
   dulieu: dl
 });

  
 }
 getNewUserData=(name,tel,permission)=>{
  var item={};
  item.id=uuidv1();
  item.name=name;
  item.tel=tel;
  item.permission=permission;
   var items=this.state.Data;
   items.push(item);
   this.setState({
     Data:items
   });
   localStorage.setItem('userData',JSON.stringify(items))
 }
 EndEditUser=()=>{
   this.setState({
    editUserStatus: !this.state.editUserStatus
   });
 }
 EditUser=(user)=>{
   this.setState({
     userEdit: user
   });
 }
 delButton=(idUser)=>{

  var tempData= this.state.Data;
  tempData=tempData.filter(item => item.id !== idUser)
  this.setState({
    Data:tempData
  });
  localStorage.setItem('userData',JSON.stringify(tempData))  
 
  
 }
 getEditUserInfo=(item0)=>{


   this.state.Data.forEach((value,key)=>{
     if(value.id === item0.id){
        value.name = item0.name;
        value.tel = item0.tel;
        value.permission = item0.permission
     }
   })
   localStorage.setItem('userData',JSON.stringify(this.state.Data))
 }
  render() {
    var ketqua=[];
    this.state.Data.forEach((item) => {
      if(item.name.indexOf(this.state.dulieu)!== -1){
        ketqua.push(item);
      }
    });
    return (
      <div>
        <Header/>
        <div className="searchform">
          <div className="container">
            <div className="row">
              <Search editUserStatus={this.state.editUserStatus}checkconnect={(dl)=>this.getTextSearch(dl)} ketnoi={()=>this.Doitrangthai()}trangthaiform={this.state.trangthaiform}
              EndEditUser={()=>this.EndEditUser()}
              userEdit={this.state.userEdit}
              getEditUserInfo={(item0)=>this.getEditUserInfo(item0)}/>
              <TableData 
              delButton={(idUser)=>this.delButton(idUser)}
              edit={(user)=>this.EditUser(user)}Data={ketqua}
              endedituser={()=>this.EndEditUser()}/>
              <AddUser ketnoi={(name,tel,permission)=>this.getNewUserData(name,tel,permission)}trangthaiform={this.state.trangthaiform}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



