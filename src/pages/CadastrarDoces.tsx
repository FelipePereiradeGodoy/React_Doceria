import React, {useState} from 'react';
import Input from '../Components/Input/Input';


function CadastrarDoces(){
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [timePreparation, setTimePreparation] = useState('');
    const [ingredientes, setIngredientes] = useState('');


    return(
        <div>
            <main>
                <form>
                    <fieldset>
                        <legend>Cadastrar novos Doces</legend>

                        <Input name={name} label={name} value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input name={category} label={category} value={category} onChange={(e) => { setCategory(e.target.value) }} />                        
                        <Input name={type} label={type} value={type} onChange={(e) => { setType(e.target.type) }} />                        
                        <Input name={price} label={price} value={price} onChange={(e) => { setPrice(e.target.value) }} />                        
                        <Input name={timePreparation} label={timePreparation} value={timePreparation} onChange={(e) => { setTimePreparation(e.target.value) }} />                        
                        <Input name={ingredientes} label={ingredientes} value={ingredientes} onChange={(e) => { setIngredientes(e.target.value) }} />                        
                        <Input name={image} label={image} value={image} onChange={(e) => { setImage(e.target.value) }} />                        

                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default CadastrarDoces;