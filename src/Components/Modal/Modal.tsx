import React from 'react';
import "./Modal.css";

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const outsideRef = React.useRef(null);
    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
        }
    }
    

    return isOpen ? (
        <div className="modal">
            <div
              ref={outsideRef}
              className="modal-overlay"
              onClick={handleCloseOnOverlay}
            />
            
            <div className="modal-box">
                <button
                  className="modal-close"
                  onClick={onClose}
                >
                    X
                </button>

                <div className="modal-title">
                    {title}
                </div>

                <div className="modal-children">
                    {children}
                </div>
            </div>
        </div>
    ) : null;   
};

export default Modal;