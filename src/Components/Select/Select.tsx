import React, { SelectHTMLAttributes, useEffect } from 'react';
import Modal from '../Modal/Modal';
import './Select.css';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label:string;
    }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest}) => {
    const [isModalOpen, setModalState] = React.useState(false);

    /**
     * Sempre que uma ação disparada através do escopo JSX for alterar algum state
     * é bom utilizar o hook "useCallback" para essa ação, passando como parametro no []
     * o state que ele irá impactar.
     */
    const openModal: Function = React.useCallback((event: Event): void => {
        event.preventDefault();
        setModalState(true);
    }, [isModalOpen]);

    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <br/>
            
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                    {options.map(option => {
                        return <option key={option.value} value={option.value}>
                               {option.label}
                               </option>
                    })}
            </select>

            <button
              onClick={(event) => openModal(event)}
            >
                +
            </button>
            
            <Modal
              title={'Novo'}
              isOpen={isModalOpen}
              onClose={() => setModalState(false)}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis minima tenetur molestiae voluptates! Aut natus doloremque recusandae est, laudantium ducimus mollitia. Est sunt quam iure. Quasi neque maiores soluta.
            </Modal>
        </div>
    );
}

export default Select;