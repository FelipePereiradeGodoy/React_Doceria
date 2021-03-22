import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLObjectElement>{
    label:string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest}) => {
    return(
        <div className="button-block">
            <button>{label}</button>
        </div>
    );
}

export default Button;