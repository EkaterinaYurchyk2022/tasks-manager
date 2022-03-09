import React, {FC} from 'react';
import {TaskType} from "./App";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

const TasksList: FC<TasksListPropsType> = (
    {
        tasks,
        removeTask
    }
) => {

   /* const {tasks} = props*/
/*    const tasks = props.tasks*/



   const tasksJSXElements = tasks.map(t => {
       const onClickRemoveTask = () => removeTask(t.id)
       return (
           <li key={t.id}>
               <input type="checkbox" checked={t.isDone}/>
               <span>{t.title}</span>
              {/* <button onClick={removeTask}>x</button>*/}
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