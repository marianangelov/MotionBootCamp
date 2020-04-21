import React, { Fragment } from 'react'
import Navigation from '../navigation/Navigation'
import CreateFrom from './create-form'

const create = () => {

    return (
    <Fragment>
    <div className='create-page'>
        <Navigation />
        <h2>Create new register</h2>
        <CreateFrom />
    </div>
    </Fragment>
)
}

export default create