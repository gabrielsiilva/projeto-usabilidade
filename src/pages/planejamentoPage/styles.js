import styled from 'styled-components';

export const Container = styled.body`
    font-family: 'Roboto', sans-serif;
`;

export const ContainerTitle = styled.div`
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

export const ContainerTable = styled.div`
    width: 10px;
    height: 10px;
`;

export const TableOne = styled.table`
    width: 20cm;
    height: 1cm;
    padding: 10px;
    border: 2px solid black;
    border-collapse: collapse;
    margin: 70px;
    margin-left: 300px;
    text-align: center;
    // background-color: #69A1D2;
    color: #69A1D2;
    font-weight: normal;
    font-size: 20px;
    // border-bottom-color: #69A1D2;
`;

export const FirstTableSecondColumn = styled.th`
    border: 2px solid black;
    background-color: white;
    color: #69A1D2;
    /* border-bottom-color: #69A1D2; */
`;

export const TableTwo = styled.table`
    width: 20cm;
    height: 1cm;
    padding: 10px;
    border: 2px solid black;
    border-collapse: collapse;
    margin: 70px;
    margin-left: 300px;
    text-align: center;
    // background-color: #69A1D2;
    color: #69A1D2;
    font-weight: normal;
    font-size: 20px;
    // border-bottom-color: #FFF;
`;

export const SecondTableSecondColumn = styled.th`
    border: 2px solid black;
    // background-color: red;
    color: #69A1D2; 
    /* border-bottom-color: #69A1D2; */
`;
