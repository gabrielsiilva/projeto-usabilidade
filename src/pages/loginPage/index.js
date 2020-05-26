import React from 'react';
import './styles.css';
// import { BsPeopleCircle } from 'react-icons/bs';


function loginPage({ history }) {
    return (
        <body>
            <div class="login">
                <img src="/images/profile.png" class="usuario" width="100" height="100" alt="" />
                <h1>SISTEMA ACADÊMICO</h1>
                <form>

                <p>Usuário</p>
                <input type="text" name="" placeholder="Usuário ou Email" required />
                <p>Senha</p>
                <input type="password" name="" placeholder="Insira sua senha" required />
                <input type="submit" name="" value="Entrar" onClick={() => history.push('/home')} />
                <a href="mailto:thales.porto@maisunifacisa.com.br">Esqueceu sua senha?</a>

                </form>
            </div>
        </body>
    );
}

export default loginPage;
