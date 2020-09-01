import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { selectThread, getSelectedThread } from './threadsSlice'

import './Thread.css';

export default (props) => {
    const selectedThread = useSelector(getSelectedThread)
    const dispatch = useDispatch()

    return (
        <div className={`thread-card ${props.thread.id === selectedThread ? 'thread-card_selected' : ''}`} onClick={(event) => {
            event.preventDefault()
            dispatch(selectThread({ "threadId": props.thread.id }))
        }}>{props.thread.title}</div>
    )
}