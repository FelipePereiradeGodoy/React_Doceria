import React, { TextareaHTMLAttributes } from 'react';
import './Textarea.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest}) => {
    return(
        <div className="TextArea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default TextArea;