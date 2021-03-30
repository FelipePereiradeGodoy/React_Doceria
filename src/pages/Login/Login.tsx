import React, {useState} from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import './Login.css';

function Login(){
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    
    return(
        <div className="page-login">
            <main>
                <form action="">
                    <fieldset>
                        <legend>Login</legend>
                        
                        <Input name="userName" label="User Name" value={userName} onChange={(e) => { setUserName(e.target.value) }} />                        
                        <Input name="password" label="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        
                        <Button nameClass="button-block" label="Sig in" type="submit" />
                        
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default Login;