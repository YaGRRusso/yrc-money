import styled from "styled-components";


export const Table = styled.table`
    width: 100%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;
    min-height: 40vh;

    .categoryCol{
        @media (max-width: 540px){
            display: none;
        }
    }
`

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
    font-size: 18px;

    @media (max-width: 540px){
        width: unset;
        flex: 1;
    }
`