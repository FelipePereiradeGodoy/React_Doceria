import React from 'react';
import "./Moda.css";

const Modal = props => {
    const { className, modalRef } = props;

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <h1>Teste</h1>
        </div>
    );
}

export default Modal;