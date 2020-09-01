import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {
    selectAllThreads,
    fetchThreads
} from './threadsSlice';

import Thread from './Thread'

export default () => {
    const dispatch = useDispatch()
    const threads = useSelector(selectAllThreads)

    const threadStatus = useSelector((state) => state.threads.status)
    const error = useSelector((state) => state.threads.error)

    useEffect(() => {
        if (threadStatus === 'idle') {
            dispatch(fetchThreads())
        }
    }, [threadStatus, dispatch])

    let content

    if (threadStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (threadStatus === 'succeeded') {
        content = threads.map((thread) => (
            <Thread key={thread.id} thread={thread} />
        )
        )
    } else if (threadStatus === 'error') {
        content = <div>{error}</div>
    }

    return (
        <section className="thread-list">
            {content}
        </section>
    )
}