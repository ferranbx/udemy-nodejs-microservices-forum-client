import { configureStore } from '@reduxjs/toolkit'

import threadsReducer from '../features/threads/threadsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: { 
    threads: threadsReducer,
    comments: commentsReducer
  }
})