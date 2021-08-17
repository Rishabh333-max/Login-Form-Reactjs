import React, { useState } from "react";

const App=()=>{
  const[fullName,setFullName]=useState({
    fname:"",
    lname:"",
    email:"",
    number:""
  });

  const inputEvent=(e)=>{
      console.log(e.target.value);
      console.log(e.target.name);

      const name=e.target.name;
      const value=e.target.value;
      const email=e.target.email;
      const number=e.target.number;

     setFullName((preValue)=>{
       if(name==="fname"){
        return {fname:value,
        lname:preValue.lname,
        email:preValue.email,
        number:preValue.number}
       }
       else if(name==="lname"){

       return {
        lname:value, 
        fname:preValue.fname,
        number:preValue.number,
 
      email:preValue.email}
       }
       else if(name==="email"){
        return {  email:value,
           fname:preValue.fname,
         lname:preValue.lname,
         number:preValue.number
      }
        }
        else if(name==="number"){
          return {   number:value,
             email:preValue.email,
             fname:preValue.fname,
           lname:preValue.lname,
         
        }
          }
     
    })
     
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    alert("Form Submitted")

  }
  
  return(
    <>
    <div className="main_div">
      <form onSubmit={onSubmit}>
    <div>
    <h1>Hello {fullName.fname} {fullName.lname}  </h1>
    <h3>{fullName.email}</h3>
    <h4>{fullName.number}</h4>
    <input type="text" placeholder="Enter Your Name"  name="fname" onChange={inputEvent}  autoSave="off"  autoComplete="off"
    //  value={fullName.fname}
     >  
    </input>
    <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent}  autoSave="off" autoComplete="off"
    //  value={fullName.lname} 
    ></input>
     <input type="email" placeholder="Enter Your E-mail" name="email" onChange={inputEvent} autoSave="off" autoComplete="off"></input>
     <input type="number" placeholder="Enter Your Mobile Number" name="number" onChange={inputEvent}  autoSave="off" autoComplete="off" ></input>
   
    <button type="submit">Submit 👍</button>
    </div>
    </form>
    </div>
    </>

  )
}
export default App;