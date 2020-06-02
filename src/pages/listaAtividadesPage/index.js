import React from 'react';
import { Container, MainTitle, TitleText, ExitIcon } from './styles';
import { IoIosExit } from 'react-icons/io';

// import { Container } from './styles';

function listaAtividadesPage({history}) {
    return (
        <Container >
            <MainTitle>
                <TitleText>Lista de Atividades</TitleText>
            </MainTitle>



            <ExitIcon fontSize={50}>
                <IoIosExit onClick={() => history.push('/home')} ></IoIosExit>
            </ExitIcon>


            
        </Container>
    );
}

export default listaAtividadesPage;
