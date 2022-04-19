import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from '../App'

export const todolistsReducer = (state: Array<TodolistType>, action: todolistsReducerType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todolistID)
        }

        case 'ADD-TODOLIST': {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.title, filter: 'all'};

            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el
            )
        }
        case "CHANGE-TODOLIST-FILTER":{
            return state.map(el=>el.id===action.payload.id?{...el,filter:action.payload.filter}:el)
        }

        default:
            return state
    }
}
type todolistsReducerType = removeTodolistACType | addTodolistAC | changeTodolistTitleAC | changeFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistID: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistID
        }
    } as const
}


type addTodolistAC = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title}
    } as const
}

type changeTodolistTitleAC = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id, title
        }

    } as const
}

type changeFilterACType=ReturnType<typeof changeFilterAC>

export const changeFilterAC = (id:string,filter:FilterValuesType) => {
  return{
      type: 'CHANGE-TODOLIST-FILTER',
      payload:{
          id, filter
      }
  }as const
}