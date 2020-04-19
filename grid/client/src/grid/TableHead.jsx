import React from 'react';
import { Link } from 'react-router-dom';

function renderTableHeader(props) {
    
    if(props.data.length > 0){
        
        let header = Object.keys(props.data[0]).slice(1,7)
        
    return header.map((key, index) => {
        // return <Link to={`/sort/${key}`}><th className="sort" key={index}>{key}</th></Link>
        return <th className="sort" key={index}><Link to={`/sort/${key}`}>{key}</Link></th>
    })
    }else{
        return <th></th>
    }
      
}

export default renderTableHeader