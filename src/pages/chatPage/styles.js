import styled from 'styled-components';

export const Container = styled.body`
  font-family: 'Roboto', sans-serif; 
`;

export const MainTitle = styled.div`
    margin: 10px;
    padding: 10px;
`;

export const TitleText = styled.h1`
    margin-top: 80px;
    border: 2px outset transparent;
    height: 50px;
    border-left: #fff;
    border-right: #fff;
    border-bottom-color: #c4c4c4;
`;

export const ChatBackground = styled.div`
    width: 1450px;
    height: 625px;
    background-color: #c4c4c4;
    bottom: -39%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`;

export const ChatBox = styled.div`
    width: 1300px;
    height: 385px;
    border: 2px solid #69a1d2;
    border-radius: 0px 0px 20px 20px;
    background-color: #f5f5f5;
    top: 55%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    /* padding: 35px; */
`;

/* CHAT Message Container */
export const FirstLightContainerChat = styled.div`
  max-width: 1160px;
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;
  margin: 12px 0;
`;

export const SecondLightContainerChat = styled.div`
  max-width: 1160px;
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;
  margin: 12px 0;
`;

export const BoldText = styled.b`
font-weight: bold;
`;

export const FirstDarkContainerChat = styled.div`
    max-width: 1160px;
    border: 2px solid #dedede;
    border-radius: 5px;
    padding: 20px;
    margin: 12px 0;
    border-color: #ccc;
    background-color: #ddd;
    border-left-color: transparent;
    border-right-color: transparent;
`;

export const SecondDarkContainerChat = styled.div`
    max-width: 1160px;
    border: 2px solid #dedede;
    border-radius: 5px 5px 5px 8px;
    padding: 20px;
    margin: 12px 0;
    border-color: #ccc;
    background-color: #ddd;
    border-left-color: transparent;
    border-right-color: transparent;
`;

export const ContainerImg = styled.img`
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    margin-top: -10px;
    border-radius: 50%;
    border: 2px dashed #2b2b2b;
`;

export const TimeRight = styled.span`
    float: right;
    color: #aaa;
    margin-top: -10px;
`;

export const Paragraph = styled.p`
    margin-top: 15px;
    color: #2b2b2b;
`;

export const RightContainer = styled.div`
    width: 135px;
    height: 377px;
    border-radius: 0px 0px 20px 0px;
    border: 1px solid #c4c4c4;
    border-right-color: #f5f5f5;
    border-top-color: #f5f5f5;
    border-bottom-color: #f5f5f5;
    background-color: #f5f5f5;
    margin-left: 1161px;
    margin-top: -378px;
    padding: 1px 15px;
`;

export const UserStatus = styled.li`
    color: rgba(111,199, 139); 
`;

export const ExitButton = styled.button`
    border: none;
    color: white;
    position: absolute;
    padding: 15px 53.4px;
    border-radius: 0px 0px 20px 0px;
    font-size: 1em;
    cursor: pointer;
    margin-left: 1233px;
    top: 577px;
    background-color: rgba(214, 69, 65, 1);

    &:hover {
        background-color: #ff0000;
        transition: 0.5s all ease-out;
    }
`;

export const TypeBox = styled.div`
    width: 1100px;
    height: 100px;
    border: 2px solid #69A1D2;
    border-radius: 20px 20px 20px 20px;
    background-color: #f5f5f5;
    top: 88%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%); 
`;

export const InputText = styled.input`
    width: 984px;
    height: 20px;
    border-color: transparent;
    border-radius: 20px 0px 0px 20px;
    bottom: 3px;
    left: 46.1%;
    position: absolute;
    transform: translate(-50%, -50%); 
    padding: 45px;
    font-size: 1em;
`;

export const SendButton = styled.button`
    border: none;
    color: white;
    padding: 34px 43px;
    border-radius: 0px 20px 20px 0px;
    position: absolute;
    font-size: 1em;
    cursor: pointer;
    transform: translate(-50%, -50%); 
    margin-left: 1212px;
    margin-top: 547px;
    background-color: rgba(111,199, 139);

    &:hover {
        background-color: #00cc00;
        transition: 0.3s all ease-out;
    }
`;