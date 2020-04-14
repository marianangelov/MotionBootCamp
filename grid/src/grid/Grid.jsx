import React from 'react';
import MOCK from '../MOCK_DATA'


class Grid extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: MOCK
        };
    }

    setSortedData(sortBy) {
        this.setState({ data: this.getSortedData(sortBy) });
    }

    getSortedData(sortBy) {
        let dataToSort = MOCK;

        if (sortBy !== 'id') {
            dataToSort.sort(function (a, b) {

                return a[sortBy].localeCompare(b[sortBy])
            })
        } else {
            dataToSort.sort(function (a, b) {

                return a[sortBy] - b[sortBy]
            })
        }

        return dataToSort;
    }

    filterTable(department) {

        let dataForState = MOCK.filter((d) => d.department === department);
        this.setState({ data: dataForState });
    }

    deleteRow(e){
        e.target.parentNode.remove()
    }

    renderTableHeader() {
        let header = Object.keys(this.state.data[0])

        return header.map((key, index) => {
            return <th className="sort" key={index} onClick={() => this.setSortedData(key)}>{key}</th>
        })
    }

    renderTableData() {

        return this.state.data.map((data, index) => {
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

    render() {

        return (
            <div>
                <table id='mock'>
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Grid;