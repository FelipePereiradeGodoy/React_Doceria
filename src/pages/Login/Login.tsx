import React, {useState} from 'react';



function Login(){
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    
    return(
        <div id="page-login">
            <main>
                <form action="">
                    <fieldset>
                        <legend>Login</legend>
                        
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <input id="userName" value={userName} type="text" onChange={(e) => { setUserName(e.target.value) }} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        
                        <button className="button-submit" type="submit">Submit</button>
                        
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default Login;