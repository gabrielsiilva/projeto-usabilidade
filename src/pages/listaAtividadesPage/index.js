import React from 'react';
import { IoIosExit } from 'react-icons/io';
import { Container, MainTitle, TitleText, ExitIcon } from './styles';

function listaAtividadesPage({ history }) {
    return (
        <Container>
            <MainTitle>
                <TitleText>Lista de Atividades</TitleText>
            </MainTitle>

            <ExitIcon fontSize={50}>
                <IoIosExit onClick={() => history.push('/home')} />
            </ExitIcon>
        </Container>
    );
}

export default listaAtividadesPage;
