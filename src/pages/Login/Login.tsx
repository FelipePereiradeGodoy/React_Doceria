import React, { FormEvent, FormEventHandler, useEffect } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import './Login.css';
import { useHistory } from 'react-router';

function Login(){
    const history = useHistory();
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleLogin(event: FormEvent) {
        event.preventDefault();
        if (userName !== "pinguim" || password !== "doceria123")
            alert("Credenciais erradas");
        else {
            sessionStorage.setItem('logged', 'true');
            history.push("cadastrar-doces");
        }
    }
    
    /**
     * Remover o atributo 'logged' sempre que o usuário acessar a rota de login
     * - o correto é não deixar ele acessar a rota, caso esteja logado, deve ser acessada somente através de um logout (no backend)
     */
    useEffect(() => {
        sessionStorage.removeItem('logged');
    }, []);
    
    return (
        <div className="page-login">
            <main>
                <form action="" onSubmit={handleLogin}>
                    <fieldset>
                        <legend>Login</legend>
                        
                        <Input name="userName" label="User Name" value={userName} onChange={(e) => { setUserName(e.target.value) }} />                        
                        <Input name="password" label="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        
                        <Button label="Sig in" type="submit" />
                        
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default Login;