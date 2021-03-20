import React, { TextareaHTMLAttributes } from 'react';
import './TextArea.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest}) => {
    return(
        <div className="TextArea-block">
            <label htmlFor={name}>{label}</label>
            <br/>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default TextArea;