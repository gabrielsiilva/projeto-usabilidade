import React from 'react';
import './styles.css';

// import { Container } from './styles';

function planejamentoPage() {
    return (
        <body>
            <div id="title">
                <h1>PLANEJAMENTO DE AULAS</h1>
            </div>

            <div class="tables">
                <table class="tableOne">
                    <tr>
                        <th>Professor(a)</th>
                        <th id="first-table-second-column">Ricardo</th>
                    </tr>
                    <tr>
                        <th>Matéria</th>
                        <th id="first-table-second-column">Inglês II</th>
                    </tr>
                    <tr>
                        <th>Tema</th>
                        <th id="first-table-second-column"> Phrasal Verbs</th>
                    </tr>
                    <tr>
                    </tr>
                </table>

                <table class="tableTwo">
                    <tr>
                        <th>Conteúdo</th>
                        <th id="second-table-second-column">Undefined</th>
                    </tr>
                    <tr>
                        <th>Metodologia</th>
                        <th id="second-table-second-column">Undefined</th>
                    </tr>
                    <tr>
                        <th>Recursos didáticos</th>
                        <th id="second-table-second-column">Undefined</th>
                    </tr>
                    <tr>
                        <th>Cronograma</th>
                        <th id="second-table-second-column">Undefined</th>
                    </tr>
                    <tr>
                        <th>Avaliação</th>
                        <th id="second-table-second-column">Undefined</th>
                    </tr>
                    <tr>
                        <th>Referências</th>
                        <th id="second-table-second-column">Undefined</th>
                    </tr>
                </table>
            </div>


        </body>
    );
}

export default planejamentoPage;
