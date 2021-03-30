import  { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import CadastrarDoces from './pages/CadastrarDoces/CadastrarDoces';


function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Login} /> {/** alterei '/cadastarDoces para /cadastrar-doces, questão de padrões */}
            <Route path="/login" exact component={Login} />
            <Route path="/cadastrar-doces" exact component={CadastrarDoces} />
            <Redirect from ="*" to="/login" />
        </Switch>
    );
}

export default Routes;