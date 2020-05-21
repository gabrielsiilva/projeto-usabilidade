import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import React from 'react';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= {LoginPage}/>
                <Route path='/Home' component= {HomePage}/>

            </Switch>
        </BrowserRouter>
    )
}

