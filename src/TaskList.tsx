import React, {FC} from 'react';
import {TaskType} from "./App";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void


}

const TaskList: FC<TaskListPropsType> = (
    {
        tasks,
        removeTask
    }) => {


    /*  const {tasks, names} = props*/
    /*const names = props.names
    const tasks = props.tasks*/

    const tasksJSXElements = tasks.map(t => {
        const onClickRemovedTask = () => removeTask(t.id)
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onClickRemovedTask}>x</button>
            </li>
        )
    })

    return (
        <ul>
            {tasksJSXElements}
        </ul>
    );
};

export default TaskList;