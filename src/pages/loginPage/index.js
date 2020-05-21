import React from 'react';
import './styles.css';
// import { BsPeopleCircle } from 'react-icons/bs';


function loginPage() {
    return (
        <body>
            <div class="login">
                <img src="/images/profile.png" class="usuario" width="100" height="100" alt="" />
                <h1>SISTEMA ACADÊMICO</h1>
                <form>

                    <p>Usuário</p>
                    {/* <div class="icon"> <BsPeopleCircle size='25px' /></div> */}
                    <input type="text" name="" placeholder="Usuário ou Email" required />

                    <p>Senha</p>
                    <input type="password" name="" placeholder="Insira sua Senha" required />
                    <input type="submit" name="" value="Entrar" />
                    <a href="#">Esqueceu sua senha?</a>

                </form>
            </div>
        </body>
    );
}

export default loginPage;
