import React, {FC} from 'react';
import {TaskType} from "./App";


type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    addTask: (title: string) => void
    changeStatus: (id: string, isDone: boolean) => void
}

const TasksList: FC<TasksListPropsType> = (
    {
        tasks,
        removeTasks,
        changeStatus
    }) => {
    /*const {tasks} = props*/


    const tasksJSXElements = tasks.map(t => {
        const onClickRemoveTask = () => removeTasks(t.id)
        return (
            <li key={t.id} className={t.isDone ? "isDone" : ""}>
                <input type="checkbox"
                       checked={t.isDone}
                       onChange={(e) => changeStatus(t.id, e.currentTarget.checked)}
                />
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