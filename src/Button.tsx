import React from 'react';
import {FilterValuesType} from "./App";


type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    btnClass?: string

}
const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button
                className={props.btnClass}
                onClick={props.onClickHandler}
            >
                {props.title}
            </button>
        </>
    );
};

export default Button;