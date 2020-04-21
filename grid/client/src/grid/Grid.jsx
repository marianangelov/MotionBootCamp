import React, { useEffect, useState, Fragment } from 'react';
import RenderTableHeader from './TableHead';
import RenderTableData from './TableBody';
import Navigation from '../navigation/Navigation'

class Grid extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    sortData = (sortBy) => {
        fetch(`http://localhost:5500/sort/${sortBy}`)
            .then(res => res.json())
            .then(d => this.setState({ data: d }))
            .catch(console.error)
    }

    // getSortedData(sortBy) {
    //     let dataToSort = MOCK;

    //     if (sortBy !== 'id') {
    //         dataToSort.sort(function (a, b) {

    //             return a[sortBy].localeCompare(b[sortBy])
    //         })
    //     } else {
    //         dataToSort.sort(function (a, b) {

    //             return a[sortBy] - b[sortBy]
    //         })
    //     }

    //     return dataToSort;
    // }

    filterData = (dep) => {
        fetch(`http://localhost:5500/filter/${dep}`)
            .then(res => res.json())
            .then(d => this.setState({ data: d }))
            .catch(console.error)
    }

    deleteRow(e) {
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

    componentDidMount() {
        fetch('http://localhost:5500/').then(r => r.json())
            .then(res => this.setState({ data: res }))
            .catch(console.error)
    }

    render() {

        return (
            <Fragment>
                <Navigation />
                <div>
                    <table id='mock'>
                        <thead>
                            <tr>
                                <RenderTableHeader data={this.state.data} sort={this.sortData} />
                            </tr>
                        </thead>
                        <tbody>
                            <RenderTableData data={this.state.data} filter={this.filterData} deleteRow={this.deleteRow} />
                        </tbody>
                    </table>
                </div>
            </Fragment>

        )
    }

}

// function Grid() {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5500/`)
//             .then(res => res.json())
//             .then(data => setData(data))
//             .catch(console.error)

//     }, [])

//     return (
//         <div>
//             <table id='mock'>
//                 <thead>
//                     <tr>
//                         <RenderTableHeader data={data} />
//                     </tr>
//                 </thead>
//                 <tbody>

//                     <RenderTableData data={data} />
//                 </tbody>
//             </table>
//         </div>
//     )
// }

export default Grid;