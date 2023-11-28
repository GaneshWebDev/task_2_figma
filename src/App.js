import Loading from "./components/loading";
import './App.css'
import UserDetails from "./components/userDetails";
import { useState,useEffect } from "react";
import axios from 'axios';
function App() {
  const [load,setLoad]=useState(true);
  const [users,setUsers]=useState([]);
  const [displayUser,setDisplayUser]=useState(false);
  const [user,setUser]=useState([]);
  const [index,setIndex]=useState('');

  useEffect(()=>{
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users').then(
      res=>{
         setUsers(res.data)
          setLoad(false); 
      }
    ).catch(err=>{
      console.log(err,'error');
      setLoad(false); 
    });
  },[]);
  const handleImageError = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].avatar =
      "https://static.thenounproject.com/png/3201587-200.png";
    setUsers(updatedUsers);
  };

  return (
    <>
    <div className="App  d-none d-md-flex  flex-cloumn justify-content-center align-items-center ">
      {load&&<Loading/>}
      {!load&&<div className="d-flex flex-column  w-20 h-md-25 h-75" >
          <div className="d-flex flex-column justify-content-center align-items-center w-100 bg-info rounded-top " style={{height:'10%' ,}}>
            <span className="fw-bold p-2" style={{fontSize:'1.3rem',color:'white'}}>USERS LIST </span>
          </div>
          {users.length?<div className="hoverable overflow-auto userList ">{users.map((user,index)=>{
               return(<div   style={{height:'50px',width:'100%'}} key={index} className="d-flex justify-content-start  align-items-center bg-secondary mt-2 rounded p-1"  onClick={()=>{setUser(user);setIndex(index);setDisplayUser(true)}}>
                  {<img src={user.avatar} onError={() => handleImageError(index)} className="rounded-circle bg-secondary"  style={{height:'40px' ,marginLeft:'8px'}} />}
                  <span style={{fontSize:'1.5rem',fontWeight:'500',marginLeft:'10px',color:'white'}}>{user.profile.firstName} {user.profile.lastName}</span>
               </div>)
          })}</div>:<div className="d-flex flex-column justify-content-center align-items-center w-100  mt-2 rounded" style={{fontSize:'1.3rem',fontWeight:'700',height:'100px'}}><span>No Data</span></div>}
          
      </div>}
      {displayUser&&<UserDetails user={user} index={index} fun={handleImageError}/>}
    </div>
    <div className="App d-md-none d-flex flex-column  justify-content-center align-items-center">
      {load&&<Loading/>}
      {!load&&<div className="d-flex flex-column  w-20 h-md-25 h-25" >
          <div className="d-flex flex-column justify-content-center align-items-center w-100 bg-info rounded-top " style={{height:'25%' ,}}>
            <span className="fw-bold p-2" style={{fontSize:'1.3rem',color:'white'}}>USERS LIST </span>
          </div>
          {users.length?<div className="hoverable overflow-auto userList ">{users.map((user,index)=>{
               return(<div   style={{height:'50px',width:'100%'}} key={index} className="d-flex justify-content-start  align-items-center bg-secondary mt-2 rounded p-1"  onClick={()=>{setUser(user);setIndex(index);setDisplayUser(true)}}>
                  {<img src={user.avatar} onError={() => handleImageError(index)} className="rounded-circle bg-secondary"  style={{height:'40px' ,marginLeft:'8px'}} />}
                  <span style={{fontSize:'1.5rem',fontWeight:'500',marginLeft:'10px',color:'white'}}>{user.profile.firstName} {user.profile.lastName}</span>
               </div>)
          })}</div>:<div className="d-flex flex-column justify-content-center align-items-center w-100  mt-2 rounded" style={{fontSize:'1.3rem',fontWeight:'700',height:'100px'}}><span>No Data</span></div>}
          
      </div>}
      {displayUser&&<UserDetails user={user} index={index} fun={handleImageError}/>}
    </div>
    </>
  );
}

export default App;
