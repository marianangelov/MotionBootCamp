import React from 'react';

function renderTableData(props) {

    return props.data.map((data) => {
        const { id, first_name, last_name, email, job_title, department } = data
        return (
            <tr key={id}>
                <td onClick={(e) => this.deleteRow(e)}>{id}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{job_title}</td>
                <td className="filter" onClick={() => this.filterTable(department)}>{department}</td>
            </tr>
        )
    })
}

export default renderTableData