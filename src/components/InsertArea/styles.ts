import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 540px){
        flex-direction: column;
    }
`

export const Field = styled.div`
    width: 19%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 540px){
        width: 100%;
    }

    span{
        font-weight: 500;
    }

    select{
        text-transform: uppercase;
    }

    select, input, button{
        margin: 1px;
        font-size: 16px;
        padding: 3px;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    button{
        color: #fff;
        background-color: #2FA746;
        border: none;
        height: 120%;
        border-radius: 5px;
        cursor: pointer;
    }
`