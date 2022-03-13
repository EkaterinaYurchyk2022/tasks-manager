import React from 'react';
import {TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void

}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>
            <TasksList
                tasks={props.tasks}
                removeTasks={props.removeTasks}
            />
            <div>
                <Button title={"All"}
                    /* onClickHandler={() => props.changeFilter("all")}*/
                />
                <Button title={"Active"}
                    /*onClickHandler={() => props.changeFilter("active")}*/
                />
                <Button title={"Completed"}
                    /*onClickHandler={() => props.changeFilter("completed")}*/
                />

            </div>

        </div>
    );
};

export default TodoList;