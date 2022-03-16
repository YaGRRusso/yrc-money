import * as C from './styles'
import chevronLeft from '../../images/chevron-left.svg'
import chevronRight from '../../images/chevron-right.svg'
import { formatMonth } from '../../helpers/dateFilter'

type Props = {
    month: string
}

export const InfoArea = ({ month }: Props) => {
    const handlePrevMonth = () => {
        let [year, mon] = month.split('-');
        let currentDate = new Date(parseInt(year), parseInt(mon) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1);
    }
    const handleNextMonth = () => {
        let [year, mon] = month.split('-');
        let currentDate = new Date(parseInt(year), parseInt(mon) + 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1);
    }

    return (
        <C.Box>
            <C.MonthArea>
                <img src={chevronLeft} alt="Voltar" onClick={handlePrevMonth} />
                <p>{formatMonth(month)}</p>
                <img src={chevronRight} alt="Avançar" onClick={handleNextMonth} />
            </C.MonthArea>
            <C.ResumeArea>
                xxx
            </C.ResumeArea>
        </C.Box>
    )
}