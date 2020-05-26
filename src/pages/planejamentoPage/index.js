import React from 'react';
import { Container, ContainerTitle, ContainerTable, TextTitle, SecondTableSecondColumn, TableOne, TableTwo, FirstTableSecondColumn } from './styles';


function planejamentoPage() {
    return (
        <Container>
            <ContainerTitle>
                <TextTitle>PLANEJAMENTO DE AULAS</TextTitle>
            </ContainerTitle>

            <ContainerTable>
                <TableOne>
                    <tr>
                        <th>Professor(a)</th>
                        <FirstTableSecondColumn>Ricardo</FirstTableSecondColumn>
                    </tr>
                    <tr>
                        <th>Matéria</th>
                        <FirstTableSecondColumn>Inglês II</FirstTableSecondColumn>
                    </tr>
                    <tr>
                        <th>Tema</th>
                        <FirstTableSecondColumn> Phrasal Verbs</FirstTableSecondColumn>
                    </tr>
                    <tr>
                    </tr>
                </TableOne>

                <TableTwo>
                    <tr>
                        <th>Conteúdo</th>
                        <SecondTableSecondColumn>Undefined</SecondTableSecondColumn>
                    </tr>
                    <tr>
                        <th>Metodologia</th>
                        <SecondTableSecondColumn>Undefined</SecondTableSecondColumn>
                    </tr>
                    <tr>
                        <th>Recursos didáticos</th>
                        <SecondTableSecondColumn>Undefined</SecondTableSecondColumn>
                    </tr>
                    <tr>
                        <th>Cronograma</th>
                        <SecondTableSecondColumn>Undefined</SecondTableSecondColumn>
                    </tr>
                    <tr>
                        <th>Avaliação</th>
                        <SecondTableSecondColumn>Undefined</SecondTableSecondColumn>
                    </tr>
                    <tr>
                        <th>Referências</th>
                        <SecondTableSecondColumn>Undefined</SecondTableSecondColumn>
                    </tr>
                </TableTwo>
            </ContainerTable>


        </Container>
    );
}

export default planejamentoPage;
