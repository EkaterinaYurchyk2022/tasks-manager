import React, {useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValuesType) => void

}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const addTask = () => {
        props.addTask(title)
        setTitle("")

    }
    //const onKeyPressAddTask
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addTask()
                        }
                    }
                    }
                />
                <Button title={"+"} onClickHandler={addTask}/>
            </div>
            <TasksList
                tasks={props.tasks}
                removeTasks={props.removeTasks}
                addTask={props.addTask}
            />
            <div>
                <Button
                    title={"All"}
                    onClickHandler={() => props.changeFilter("all")}

                />
                <Button
                    title={"Active"}
                    onClickHandler={() => props.changeFilter("active")}

                />
                <Button
                    title={"Completed"}
                    onClickHandler={() => props.changeFilter("completed")}

                />

            </div>

        </div>
    );
};

export default TodoList;