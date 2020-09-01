import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import '../../components/InlineForm.css';
import { addThread } from './threadsSlice';

export default (props) => {
    const [ title, setTitle ] = useState('');

    const dispatch = useDispatch();

    return <form className="inline-form" onSubmit={(event) => {
        event.preventDefault()
        dispatch(addThread({ title }))
        setTitle('')
    }}>
        <input type="text" placeholder="Open a new thread" value={title} onChange={e => setTitle(e.target.value)}></input>
        <button>add</button>
    </form>
}