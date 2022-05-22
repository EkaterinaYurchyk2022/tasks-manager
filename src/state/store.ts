import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";
import {combineReducers, legacy_createStore as createStore} from "redux";

const rootReducer = combineReducers({
    todoLists: todolistsReducer,
    tasks: tasksReducer
})


export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store