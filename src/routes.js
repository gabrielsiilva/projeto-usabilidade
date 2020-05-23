import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import ChatPage from './pages/chatPage';
import EntregaAtividadePage from './pages/entregaAtividadePage';
import ListaAtividadesPage from './pages/listaAtividadesPage';
import MaterialDidaticoPage from './pages/materialDidaticoPage';
import PlanejamentoPage from './pages/planejamentoPage';
import React from 'react';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={LoginPage} />
                <Route path='/Home' component={HomePage} />
                <Route path='/Chat' component={ChatPage} />
                <Route path='/EntregaAtividade' component={EntregaAtividadePage} />
                <Route path='/ListaAtividade' component={ListaAtividadesPage} />
                <Route path='/MaterialDidatico' component={MaterialDidaticoPage} />
                <Route path='/Planejamento' component={PlanejamentoPage} />
            </Switch>
        </BrowserRouter>
    )
}

