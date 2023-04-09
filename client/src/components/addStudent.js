import React from 'react';



const AddStudent = ()=>{
    const [name,setName] = React.useState('');
    const [userName,setUsername] = React.useState('');
    const [phoneNumber,setphoneNumber] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [userType,setUserType] = React.useState('');

    const addstudent = async ()=>{
        // console.warn(name,userName,phoneNumber,email,userType);
        let result = await fetch("http://localhost:8080/add",{
            method : "post",
            body :JSON.stringify( {name,userName,phoneNumber,email,userType}),
            headers : {
                "Content-type" : "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }
    return(
        <div className='student'>
            <h1>Student add</h1>
            
            <label className='inputLabel'>Student Name</label>
            <input type='text' placeholder='Enter Student Name' className='inputBox' value={name}  onChange={(e)=>{setName(e.target.value)}}/>

            <label className='inputLabel'>Student Username</label>
            <input type='text' placeholder='Enter Student Username'className='inputBox' value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>

            <label className='inputLabel'>Phone</label>
            <input type='number' placeholder='Enter Student Phone Number' className='inputBox' value={phoneNumber}  onChange={(e)=>{setphoneNumber(e.target.value)}}/>

            <label className='inputLabel'>Student Email</label>
            <input type='text' placeholder='Enter Student Email' className='inputBox' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>

            <label className='inputLabel'>User Type</label>
            <input type='text' placeholder='Enter User Type' className='inputBox' value={userType}  onChange={(e)=>{setUserType(e.target.value)}}/>

            <button onClick={addstudent}  className='addButton'>Add Student</button>
        </div>
    )
}

export default AddStudent;
