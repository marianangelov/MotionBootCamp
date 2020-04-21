import React from 'react';
import { Link } from 'react-router-dom';

function renderTableHeader({ data, sort }) {
    
    
    if (data.length > 0) {

        let header = Object.keys(data[0]).slice(1, 7)

        return header.map((key, index) => {
            // return <Link to={`/sort/${key}`}><th className="sort" key={index}>{key}</th></Link>
            // return <th className="sort" key={index}><Link to={`/sort/${key}`}>{key}</Link></th>
            return <th className="sort" key={index} onClick={()=>sort(key)}>{key}</th>
        })
    } else {
        return <th></th>
    }

}

export default renderTableHeader