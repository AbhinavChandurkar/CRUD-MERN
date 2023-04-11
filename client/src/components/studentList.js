import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList =()=>{
    const [students,setStudents] = useState([]);
    useEffect(()=>{
        getStudents();
    },[]);

    const getStudents = async ()=>{
        let result = await fetch('http://localhost:8080/');
        result = await result.json();
        setStudents(result);
    }

    // console.warn(students);

    
    const deleteStudent = async (id)=>{
        let result = await fetch(`http://localhost:8080/student/${id}`,{
            method : "Delete"
        });
        console.log(result);
        result = await result.json();
        console.log(result);
        if(result){
            getStudents();
        }
    }

    const searchHandle = async(event)=>{
        // console.warn(event.target.value);
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:8080/search/${key}`);
            result = await result.json();
            if(result){
                setStudents(result);
            }
        }else{
            getStudents();
        }

    }


    return(
        <div className='student-list'>
            <h3>Student Data</h3>
            <input type='' className='search-student-box' placeholder='Search Student' 
                onChange={searchHandle}
            />
            <ul>
                <li>S.No.</li>
                <li>Name</li>
                <li>UserName</li>
                <li>Phone Number</li>
                <li>email</li>
                <li>UserType</li>
                <li>Operation</li>
            </ul>
            {
                students.length > 0 ? students.map((item,index)=>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.userName}</li>
                        <li>{item.phoneNumber}</li>
                        <li>{item.email}</li>
                        <li>{item.userType}</li>
                        <li>
                            <button onClick={()=>deleteStudent(item._id)}>Delete</button>
                            <Link to={"/student/"+item._id}>Update</Link>
                        </li>
                    </ul>
                )
                :<h1>No result Found</h1>
            }
        </div>
    )
}

export default StudentList;
