import styled from 'styled-components';

export const Container = styled.body`
  font-family: 'Roboto', sans-serif;
  margin: 15px;
`;

export const MainTitle = styled.div`
    margin: 10px;
    padding: 10px;
    color: #2b2b2b;
`;

export const TitleText = styled.h1`
    margin-top: 80px;
    border: 2px outset transparent;
    height: 70px;
    border-left: #FFF;
    border-right: #FFF;
    border-bottom-color: #C4C4C4;
`;

/* ICONS */
export const ExitIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 10%;
    cursor: pointer;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: var(--primary-color);
    font-size: ${props => `${props.fontSize}px`};
    color: #fff;
    opacity: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        color: rgba(214, 69, 65, 1);
        transition: 0.5s all ease-out;
    }
`;