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
    changeStatus: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")

    }

    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    className={error ? "error" : ""}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value)
                        setError(false)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addTask()
                        }
                    }
                    }
                />
                <Button
                    btnClass={props.filter === "all" ? "btn-active" : ""}
                    title={"+"} onClickHandler={addTask}/>
                {error && <div className={"error-message"}>Title is required!</div>}
            </div>
            <TasksList
                tasks={props.tasks}
                removeTasks={props.removeTasks}
                addTask={props.addTask}
                changeStatus={props.changeStatus}
            />
            <div>
                <Button
                    btnClass={props.filter === "all" ? "btn-active" : ""}
                    title={"All"}
                    onClickHandler={() => props.changeFilter("all")}

                />
                <Button
                    btnClass={props.filter === "active" ? "btn-active" : ""}
                    title={"Active"}
                    onClickHandler={() => props.changeFilter("active")}

                />
                <Button
                    btnClass={props.filter === "completed" ? "btn-active" : ""}
                    title={"Completed"}
                    onClickHandler={() => props.changeFilter("completed")}

                />

            </div>

        </div>
    );
};

export default TodoList;