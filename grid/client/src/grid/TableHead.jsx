import React from 'react';
import { render } from '@testing-library/react';

function renderTableHeader(props) {
    
    if(props.data.length > 0){
        
        let header = Object.keys(props.data[0])
         
    return header.map((key, index) => {
        return <th className="sort" key={index} onClick={() => this.setSortedData(key)}>{key}</th>
    })
    }else{
        return <th></th>
    }
     
    
}

export default renderTableHeader