import React  from 'react';



const UpdateStudent = ()=>{
    const [name,setName] = React.useState('');
    const [userName,setUsername] = React.useState('');
    const [phoneNumber,setphoneNumber] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [userType,setUserType] = React.useState('');


    const UpdateStudent = async ()=>{
        console.log(name,userName,email,phoneNumber);
        let result = await fetch()
    }
    return(
        <div className='student'>
            <h1>Update Data</h1>
            
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

            <button onClick={UpdateStudent}  className='addButton'>Update Student</button>
        </div>
    )
}

export default UpdateStudent;
