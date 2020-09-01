import React from 'react'

import ThreadList from './ThreadList'
import AddThreadForm from './AddThreadForm'

export default () => {
    return <div className="section">
        <div className="section-header">
            <h1 className="section-title">Threads</h1>
            <p className="section-subtitle">Pick a thread and start chatting</p>
            <ThreadList></ThreadList>
        </div>
        <AddThreadForm></AddThreadForm>
    </div>
}