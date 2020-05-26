// /* Primeira tabela */
// // .tableOne, th, td {
// //     width: 20cm;
// //     height: 1cm;
// //     padding: 10px;
// //     border: 2px solid black;
// //     border - collapse: collapse;
// //     margin: 70px;
// //     margin - left: 300px;
// //     text - align: center;
// //     background - color: #69A1D2;
// //     color: #FFF;
// //     font - weight: normal;
// //     font - size: 20px;
// //     border - bottom - color: #FFF;
// // }

// // /* Segunda coluna da primeira tabela */
// // #first - table - second - column {
// //     border: 2px solid black;
// //     background - color: white;
// //     color: #69A1D2;
// //     /* border-bottom-color: #69A1D2; */
// // }

// /* Segunda tabela */
// // .tableTwo, th, td {
// //     width: 20cm;
// //     height: 1cm;
// //     padding: 10px;
// //     border: 2px solid black;
// //     border - collapse: collapse;
// //     margin: 70px;
// //     margin - left: 300px;
// //     text - align: center;
// //     background - color: #69A1D2;
// //     color: #FFF;
// //     font - weight: normal;
// //     font - size: 20px;
// //     border - bottom - color: #FFF;
// // }

// /* Segunda coluna da segunda tabela */
// #second - table - second - column {
//     border: 2px solid black;
//     background - color: white;
//     color: #69A1D2;
//     /* border-bottom-color: #69A1D2; */
// }

import styled from 'styled-components';

export const Container = styled.body`
  font-family: 'Roboto', sans-serif;
`;


export const ContainerTitle = styled.div`
    margin: 0;
    padding: 0;
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
            background-color: #69A1D2;
            color: #FFF;
            font-weight: normal;
            font-size: 20px;
            border-bottom-color: #FFF;
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
    background-color: #69A1D2;
    color: #FFF;
    font-weight: normal;
    font-size: 20px;
    border-bottom-color: #FFF;
        `;

export const SecondTableSecondColumn = styled.th`
border: 2px solid black;
    background-color: white;
    color: #69A1D2;
    /* border-bottom-color: #69A1D2; */`;
