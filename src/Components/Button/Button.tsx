import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLObjectElement>{
    label:string;
    nameClass: string;
}

const Button: React.FC<ButtonProps> = ({ label, nameClass, ...rest}) => {
    return(
        <div className={nameClass}>
            <button>{label}</button>
        </div>
    );
}

export default Button;