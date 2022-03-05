import React from 'react';

type TodoListHeaderPropsType = {
    title: string
}

const TodoListHeader = (props: TodoListHeaderPropsType) => {
    return (
        <h3>{props.title}</h3>
    );
};

export default TodoListHeader;