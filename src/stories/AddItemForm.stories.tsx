import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";


export default {
    title: 'TODOLISTS/AddItemForm',
    component: AddItemForm,

    argTypes: {
        addItem: {
            description: 'callback'
        },
    },
    args: {
        label: 'Button'
    }
} as ComponentMeta<typeof AddItemForm>;


const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormStory = Template.bind({});

AddItemFormStory.args = {
    addItem: action('Button clicked inside form')
    //label: 'Button',
};

