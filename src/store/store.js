import { configureStore } from '@reduxjs/toolkit'
import userApi from '../features/users/user'
import blogApi from '../features/blogs/blogApi'
import userReducer from '../slice/user/UserSlice'
import commentApi from '../features/comments/commentApi'

export const store = configureStore({
    reducer : {
        user:userReducer,
        [userApi.reducerPath] : userApi.reducer,
        [blogApi.reducerPath] : blogApi.reducer,
        [commentApi.reducerPath] : commentApi.reducer 
    },
    middleware : (defaultMiddleware) => 
        defaultMiddleware().concat(userApi.middleware, blogApi.middleware, commentApi.middleware)   
})  