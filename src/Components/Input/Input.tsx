import React, { InputHTMLAttributes } from 'react';
import './Input.css';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <br/>
            
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;