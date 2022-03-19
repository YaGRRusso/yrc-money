import styled from 'styled-components';
export const Container = styled.div<{ color?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        margin: 0;
        color: #555;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 16px;
    }
    span{
        font-weight: bold;
        font-size: ${props => props.color ? '28px' : '18px'};
        color: ${props => props.color ? props.color : '000'}
    }
`