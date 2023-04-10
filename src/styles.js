import styled from "styled-components";

export const SCButton = styled.button`
    font-size: 0.9em;
    padding: 0.5em;
    border-radius: 10px;
    border: none;
    margin-right: 15px;
`;

export const SCFormContainer = styled.div`
    max-width: 600px;
    height: auto; 
    margin: 0 auto;
    background-color: #fff;
    padding: 35px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    form {
        max-width: 500px;
        margin: 0 auto;
    }

    .acoes {
        margin-top: 50px;
    }
`;

export const SCHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
    padding-top: 40px;

    h2 {
        color: #977;
        font-size: 40px;
        margin-bottom: 20px;
    }
`;