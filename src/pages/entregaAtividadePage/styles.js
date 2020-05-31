import styled from 'styled-components';

export const Container = styled.body`
    font-family: 'Roboto', sans-serif;
`;

export const MainTitle = styled.div`
    margin: 10px;
    padding: 10px;
`;

export const TextTitle = styled.h1`
    margin-top: 80px;
    border: 2px outset #FFF;
    height: 50px;
    border-left: #FFF;
    border-right: #FFF;
    border-bottom-color: #C4C4C4;
`;

export const MainTable = styled.div`
    width: 900px;
    height: 10px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    top: 30%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-size: large;
`;

export const TextSubtitle = styled.h2`
    margin-top: -15px;
    color: #FFF;
`;

/* Tabela Descricao */
export const DescricaoTable = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgba(0,0,5,0.7);
    top: 40%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Tabela Prazo */
export const PrazoTable = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgba(0,0,5,0.7);
    top: 40%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Tabela Status */
export const StatusTable = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgba(0,0,5,0.7);
    top: 40%;
    left: 71%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Primeira Coluna abaixo da Descrição */
export const FirstColumnTableOne = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    top: 50%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const FirstColumnTableTwo = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    top: 60%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const FirstColumnTableThree = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    top: 70%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Segunda Coluna abaixo do Prazo */
export const SecondColumnTableOne = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const SecondColumnTableTwo = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    top: 60%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const SecondColumnTableThree = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    top: 70%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Terceira Coluna abaixo do Status */
export const ThirdColumnTableOne = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    opacity: 60%;
    transition: 0.2s;
    top: 50%;
    left: 71%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-family: bold;

    &:hover {
        cursor: pointer;
        background: rgba(111,199, 139);
        transition: 0.5s all ease-out;
    }
`;

export const ThirdColumnTableTwo = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    opacity: 60%;
    top: 60%;
    left: 71%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-family: bold;

    &:hover {
        cursor: pointer;
        background: rgba(250, 216, 89, 1);
        transition: 0.5s all ease-out;
    }
`;

export const ThirdColumnTableThree = styled.div`
    width: 290px;
    height: 20px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #69A1D2;
    opacity: 60%;
    top: 70%;
    left: 71%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-family: bold;

    &:hover {
        cursor: pointer;
        background: rgba(214, 69, 65, 1);
        transition: 0.5s all ease-out;
    }
`;

export const NormalText = styled.h3`
    margin-top: -15px;
    color: #FFF;
    font-size: 16px;
    font-weight: normal;
`;

/* ICONS */
export const ExitIcon = styled.div`
    font-size: ${props => `${props.fontSize}px`};
    margin-left: 93%;
    margin-top: -150px;
    padding: 10px 20px;
    width: -10%;
    /* color: white; */

    &:hover {
        cursor: pointer;
        color: rgba(214, 69, 65, 1);
        transition: 0.5s all ease-out;
    }
    
`;
