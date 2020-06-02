import React from 'react';
import { Container, MainTitle, TitleText, ExitIcon } from './styles';
import { IoIosExit } from 'react-icons/io';

// import { Container } from './styles';

function materialDidaticoPage({history}) {
    return (
        <Container >
            <MainTitle>
                <TitleText>Material Didático</TitleText>
            </MainTitle>




            <ExitIcon fontSize={50}>
                <IoIosExit onClick={() => history.push('/home')} ></IoIosExit>
            </ExitIcon>

            
        </Container>
    );
}

export default materialDidaticoPage;
