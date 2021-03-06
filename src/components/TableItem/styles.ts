import styled from 'styled-components'

export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
    padding: 10px 0;
    border-bottom: 1px solid #00000015;
    padding-right: 20px;

    @media (max-width: 540px){
        font-size: 13px;
        
        .categoryCol{
            display: none;
        }
    }

`

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 0;
    width: 60%;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
    color: ${props => props.color};
    border: 1px solid ${props => props.color};
    background-color: ${props => `${props.color}10`};
`

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`