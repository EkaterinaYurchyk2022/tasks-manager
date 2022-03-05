import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
    }

function App() {
    // C - create
    // R - read
    // U - update
    // D - delete
    // BLL:
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    const todoListTitle_3: string = "What to read"

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
// UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
   {/*         <TodoList title={todoListTitle_2}/>
            <TodoList title={todoListTitle_3}/>*/}
        </div>
    );
}

export default App;
