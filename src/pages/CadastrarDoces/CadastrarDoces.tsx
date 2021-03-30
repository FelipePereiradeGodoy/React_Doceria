import React, {useState} from 'react';
import Input from '../../Components/Input/Input';
import Select from '../../Components/Select/Select';
import TextArea from '../../Components/TextArea/TextArea';
import Button from '../../Components/Button/Button';

import './CadastrarDoces.css';


function CadastrarDoces(){
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [preparationMode, setPraparationMode] = useState('');
    

    return(
        <div className="page-cadastrarDoces">
            <main>
                <form>
                    <fieldset>
                        <legend>Cadastrar novos Doces</legend>

                        <Input name="name" label="Nome" value={name} onChange={(e) => { setName(e.target.value) }} />
                        
                        <div className="block-select_button">
                            <Select 
                                name="category"
                                label="Categorias"
                                value={category}
                                onChange={(e) => { setCategory(e.target.value) }}
                                options={[
                                    { value: 'chicolates', label: 'Chocolates'},
                                    { value: 'desserts', label: 'Sobremesas'},
                                    { value: 'cakes', label: 'Bolos'},

                                ]}                        
                            />

                            <Button nameClass="button-block-add" label="+" />
                        </div>
                        
                        <div className="block-select_button">
                            <Select 
                                name="type"
                                label="Tipos de Doces"
                                value={type}
                                onChange={(e) => { setType(e.target.value) }}
                                options={[
                                    { value: 'bonbons', label: 'Bombons'},
                                    { value: 'pies', label: 'Tortas'},
                                    { value: 'stuffed cakes', label: 'Bolos Recheados'},
                                ]}                        
                            />   

                            <Button nameClass="button-block-add" label="+" />
                        </div>                       
                                   
                        <Input name="price" label="Preço" value={price} onChange={(e) => { setPrice(e.target.value) }} />                        
                       
                        <TextArea 
                            name="preparationMode"
                            label="Modo de Preparo"
                            value={preparationMode}
                            onChange={(e) => { setPraparationMode(e.target.value) }}               
                        />                        
                                       
                        {/* Colocar componente para adicionar foto */}
                        <Button nameClass="button-block" label="Save" />                        
                       
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default CadastrarDoces;