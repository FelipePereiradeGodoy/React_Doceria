import React from 'react';
import  {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import CadastrarDoces from './pages/CadastrarDoces/CadastrarDoces';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastrarDoces" component={CadastrarDoces} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;