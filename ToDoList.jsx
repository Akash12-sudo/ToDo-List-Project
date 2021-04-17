
import React, { useState } from 'react';

const ToDoList = (props) => {


    return (<li><i class="fa fa-times" area-hidden="true"
        onClick={() => {
            props.onSelect(props.id);
        }}></i>{props.text}</li>);
}

export default ToDoList;