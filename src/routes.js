import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './views/index';
import Home from './views/home';
import Historico from './views/historico';
import Configuracao from './views/config';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/home' component={Home} />
            <Route path='/historico' component={Historico} />
            <Route path='/config' component={Configuracao} />
            <Route path='/logout' component={() => <Redirect to='/' />} />
            <Route path="*" component={() => <Redirect to='/' />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;