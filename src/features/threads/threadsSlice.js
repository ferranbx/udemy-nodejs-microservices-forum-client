import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchThreads = createAsyncThunk('threads/fecthThreads', async () => {
  const response = await axios.get('http://localhost:3500/threads')
  return response.data
})

export const addThread = createAsyncThunk('threads/addThread', async (thread) => {
  const response = await axios.post('http://localhost:3500/threads', { "content": thread.title })
  return response.data
})

export const threadsSlice = createSlice({
  name: 'threads',
  initialState: {
    selected: '',
    threads: [],
    status: 'idle',
    error: null
  },
  reducers: {
    selectThread(state, action) {
      const threadId = action.payload.threadId
      state.selected = threadId
      console.log(state.selected);
    }
  },
  extraReducers: {
    [fetchThreads.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchThreads.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.threads = state.threads.concat(action.payload)
    },
    [fetchThreads.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    [addThread.fulfilled]: (state, action) => {
      state.threads.push(action.payload)
    }
  }
})

export const { selectThread } = threadsSlice.actions

export default threadsSlice.reducer

export const selectAllThreads = (state) => state.threads.threads

export const getSelectedThread = (state) => state.threads.selected