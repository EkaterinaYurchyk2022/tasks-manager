import React, {ChangeEvent} from 'react';


type UniversalCheckboxPropsType={
    callBack:(checkedValue:boolean)=>void
    checked:boolean
}

export const UniversalCheckbox = (props:UniversalCheckboxPropsType) => {
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
props.callBack(event.currentTarget.checked)
    }
    return (
        <input type="checkbox" onChange={onChangeHandler} checked={props.checked}/>
    );
};

export default UniversalCheckbox;