import React from 'react';
import './input.css'
import { Button, Input } from "antd";

const Inputs = (props) => {
    return (
        <Input onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};

export default Input;