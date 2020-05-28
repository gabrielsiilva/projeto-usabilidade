import React from 'react';
import { Container, MainTitle, ProfessorFirstTable, TitleText, TextTableOne, ProfessorSecondTable, TextTableTwo, MateriaFirstTable, MateriaSecondTable, TemaFirstTable, TemaSecondTable, ConteudoFirstTable, ConteudoSecondTable, MetodologiaFirstTable, MetodologiaSecondTable, CronogramaFirstTable, CronogramaSecondTable, AvaliacaoFirstTable, AvaliacaoSecondTable, ReferenciaFirstTable, ReferenciaSecondTable } from './styles';


function planejamentoPage() {
    return (
       <Container>
           <MainTitle>
               <TitleText>PLANEJAMENTO DE AULAS</TitleText>
           </MainTitle>

           <ProfessorFirstTable>
               <TextTableOne>Professor(a)</TextTableOne>
           </ProfessorFirstTable>

           <ProfessorSecondTable>
               <TextTableTwo>Daniel</TextTableTwo>
           </ProfessorSecondTable>

           <MateriaFirstTable>
               <TextTableOne>Matéria</TextTableOne>
           </MateriaFirstTable>

           <MateriaSecondTable>
               <TextTableTwo>Inglês</TextTableTwo>
           </MateriaSecondTable>

           <TemaFirstTable>
               <TextTableOne>Tema</TextTableOne>
           </TemaFirstTable>

           <TemaSecondTable>
               <TextTableTwo>Voz passiva e If-clauses</TextTableTwo>
           </TemaSecondTable>

           <ConteudoFirstTable>
               <TextTableOne>Conteúdo</TextTableOne>
           </ConteudoFirstTable>

           <ConteudoSecondTable>
               <TextTableTwo>TODO</TextTableTwo>
           </ConteudoSecondTable>

           <MetodologiaFirstTable>
               <TextTableOne>Metodologia</TextTableOne>
           </MetodologiaFirstTable>

           <MetodologiaSecondTable>
               <TextTableTwo>TODO</TextTableTwo>
           </MetodologiaSecondTable>

           <CronogramaFirstTable>
               <TextTableOne>Cronograma</TextTableOne>
           </CronogramaFirstTable>

           <CronogramaSecondTable>
               <TextTableTwo>TODO</TextTableTwo>
           </CronogramaSecondTable>

           <AvaliacaoFirstTable>
               <TextTableOne>Avaliação</TextTableOne>
           </AvaliacaoFirstTable>

           <AvaliacaoSecondTable>
               <TextTableTwo>TODO</TextTableTwo>
           </AvaliacaoSecondTable>

           <ReferenciaFirstTable>
               <TextTableOne>Referência</TextTableOne>
           </ReferenciaFirstTable>

           <ReferenciaSecondTable>
               <TextTableTwo>TODO</TextTableTwo>
           </ReferenciaSecondTable>

       </Container>
    );
}

export default planejamentoPage;
