import React from 'react';
import {Link} from 'react-router-dom'


const nav=()=>{

    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Students</Link></li>
                <li><Link to="/add" >AddStudents</Link></li>
            </ul>
        </div>
    )


}

export default nav;