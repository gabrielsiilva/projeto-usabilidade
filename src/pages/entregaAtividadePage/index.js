import React from 'react';
import { Container, MainTitle, TextTitle, MainTable, TextSubtitle, DescricaoTable, PrazoTable, StatusTable, FirstColumnTableOne, FirstColumnTableTwo, FirstColumnTableThree, SecondColumnTableOne, SecondColumnTableTwo, SecondColumnTableThree, ThirdColumnTableOne, ThirdColumnTableTwo, ThirdColumnTableThree, NormalText } from './styles';

// import { Container } from './styles';

function entregaAtividadePage() {
    return (
    <Container>
        <MainTitle>
            <TextTitle>CRIAÇÃO E ENTREGA DE ATIVIDADES</TextTitle>
        </MainTitle>

        <MainTable>
            <TextSubtitle>Fevereiro - Atividade 03</TextSubtitle>
        </MainTable>

        <DescricaoTable>
            <TextSubtitle>Descrição</TextSubtitle>
        </DescricaoTable>

        <PrazoTable>
            <TextSubtitle>Prazo</TextSubtitle>
        </PrazoTable>

        <StatusTable>
            <TextSubtitle>Status</TextSubtitle>
        </StatusTable>
        
        {/* Primeira Coluna abaixo da Descrição */}
        <FirstColumnTableOne>
            <NormalText></NormalText>
        </FirstColumnTableOne>

        <FirstColumnTableTwo>
            <NormalText></NormalText>
        </FirstColumnTableTwo>

        <FirstColumnTableThree>
            <NormalText></NormalText>
        </FirstColumnTableThree>

        {/* Segunda Coluna abaixo do Prazo */}
        <SecondColumnTableOne>
            <NormalText></NormalText>
        </SecondColumnTableOne>

        <SecondColumnTableTwo>
            <NormalText></NormalText>
        </SecondColumnTableTwo>

        <SecondColumnTableThree>
            <NormalText></NormalText>
        </SecondColumnTableThree>

        {/* Terceira Coluna abaixo do Status */}
        <ThirdColumnTableOne>
            <NormalText></NormalText>
        </ThirdColumnTableOne>

        <ThirdColumnTableTwo>
            <NormalText></NormalText>
        </ThirdColumnTableTwo>

        <ThirdColumnTableThree>
            <NormalText></NormalText>
        </ThirdColumnTableThree>
    </Container>
    );
}

export default entregaAtividadePage;
