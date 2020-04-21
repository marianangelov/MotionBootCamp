import React from 'react';
import { Link } from 'react-router-dom';



function renderTableData({data, filter, deleteRow}) {

    

    return data.map((data) => {
        const { id, first_name, last_name, email, job_title, department } = data
        return (
            <tr key={id}>
                <td className='delete' onClick={(e)=>deleteRow(e)}>{id}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{job_title}</td>
                <td className="filter" onClick={()=>filter(department)}>{department}</td>
            </tr>
        )
    })
}


export default renderTableData