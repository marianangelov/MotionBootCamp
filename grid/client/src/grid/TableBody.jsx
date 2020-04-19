import React from 'react';
import { Link } from 'react-router-dom';



function renderTableData(props) {

    const { data } = props

    return data.map((data) => {
        const { id, first_name, last_name, email, job_title, department } = data
        return (
            <tr key={id}>
                <td onClick={(e) => this.deleteRow(e)}>{id}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{job_title}</td>
                <td className="filter"><Link to={`/filter/${department}`}>{department}</Link></td>
            </tr>
        )
    })
}


export default renderTableData