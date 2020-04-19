import React, { useEffect, useState } from 'react';
import RenderTableHeader from './TableHead';
import RenderTableData from './TableBody';

function FilteredGrid(props) {
    const dep = props.match.params.dep;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5500/filter/${dep}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(console.error)

    }, [])
    

    return (
        <div>
            <table id='mock'>
                <thead>
                    <tr>
                        <RenderTableHeader data={data} />
                    </tr>
                </thead>
                <tbody>

                    <RenderTableData data={data} />
                </tbody>
            </table>
        </div>
    )
}

export default FilteredGrid;