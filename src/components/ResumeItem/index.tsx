import * as C from './styles'

type Props = {
    title: string,
    value: number,
    color?: string
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container color={color}>
            <p>{title}</p>
            <span>R$ {value.toFixed(2)}</span>
        </C.Container>
    )
}