import styled from 'styled-components';

export const Box = styled.div`
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: -50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px){
        flex-direction: column;
    }
`

export const MonthArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        cursor: pointer;
    }

    p{
        font-size: 24px;
        margin: 20px;
    }
`

export const ResumeArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    margin-left: 30px;

    @media (max-width: 900px){
        width: 100%;
        margin-left: 0;
    }

    @media (max-width: 540px){
        flex-direction: column;
    }
`