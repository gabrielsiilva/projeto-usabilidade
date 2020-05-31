import React from 'react';
import './styles.css';
import { FiSend } from "react-icons/fi";
import { IoIosExit } from 'react-icons/io';

// import { Container } from './styles';

function chatPage({ history }) {
    return (
        <body>
            <div class="main-title">
                <h1>CHAT</h1>
            </div>

            <div class="chat-background" />

            <div class="chat-box">

                <div class="container">
                    <img src="/images/profile.png" alt="Avatar" />
                    <p><b>Aluno:</b> Boa Noite! Gostaria de tirar uma dúvida.</p>
                    <span class="time-right">22:00</span>
                </div>

                <div class="container darker">
                    <img src="/images/profile2.png" alt="Avatar" />
                    <p><b>Professor:</b> Opa! Boa noite, Pedro. Em que posso te ajudar?</p>
                    <span class="time-left">22:20</span>
                </div>

                <div class="container">
                    <img src="/images/profile.png" alt="Avatar" />
                    <p><b>Aluno:</b> Então, a questão 1 é para traduzir o texto inteiro e identificar apenas os phrasal verbs, certo?</p>
                    <span class="time-right">22:23</span>
                </div>

                <div class="container darker">
                    <img src="/images/profile2.png" alt="Avatar" />
                    <p><b>Professor:</b> Exatamente! Qualquer dúvida, é só falar comigo por aqui. Abraço!</p>
                    <span class="time-left">22:25</span>
                </div>

                <div class="right-container">
                    <li><p>Aluno</p></li>
                    <li><p>Professor</p></li>
                </div>

                <button type="button" class="exit-button" onClick={() => history.push('/Home')} > <IoIosExit font-size={30} /> </button>

            </div>

            <div class="type-box" />
            
            <input type="text" name="" class="input-text" placeholder="Escreva uma mensagem..." />

            <button type="button" class="send-button" onClick={() => { alert('Mensagem Enviada!'); }} > <FiSend font-size={30} /> </button>


        </body>
    );
}

export default chatPage;
