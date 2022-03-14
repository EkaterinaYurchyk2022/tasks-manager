import React, {FC} from 'react';
import {TaskType} from "./App";


type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    addTask: (title: string) => void
}

const TasksList: FC<TasksListPropsType> = (
    {
        tasks,
        removeTasks,

    }) => {
    /*const {tasks} = props*/


    const tasksJSXElements = tasks.map(t => {
        const onClickRemoveTask = () => removeTasks(t.id)
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onClickRemoveTask}>x</button>
            </li>
        )
    })

    return (
        <ul>
            {tasksJSXElements}
        </ul>
    );
};

export default TasksList;