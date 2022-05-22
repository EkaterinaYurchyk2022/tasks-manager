import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Task from "../Task";


export default {
    title: 'TODOLISTS/Task',
    component: Task,

    argTypes: {
        addItem: {
            description: 'callback'
        },
    },
    args: {
        todolistId: 'gfrawyt',
        changeTaskStatus:action ('changeTaskStatus'),
        changeTaskTitle:action ('changeTaskTitle'),
        removeTask:action ('removeTask')
    }
} as ComponentMeta<typeof Task>;


const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
export const TaskIsNotDoneStory = Template.bind({});

TaskIsDoneStory.args = {
    task:{id:'12', isDone:true, title:'JS' }
};

TaskIsNotDoneStory.args = {
    task:{id:'121', isDone:false, title:'CSS' }
};
