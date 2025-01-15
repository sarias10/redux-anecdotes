import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./src/reducers/anecdoteReducer";
import filterReducer from "./src/reducers/filterReducer";
import notificationReducer from "./src/reducers/notificationReducer";

export const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notifications: notificationReducer
    }
})