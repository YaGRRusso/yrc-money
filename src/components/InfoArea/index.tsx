import * as C from './styles'
import chevronLeft from '../../images/chevron-left.svg'
import chevronRight from '../../images/chevron-right.svg'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string,
    monthChange: (newMonth: string) => void,
    income: number,
    expense: number
}

export const InfoArea = ({ currentMonth, monthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1);
        monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1);
        monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Box>
            <C.MonthArea>
                <img src={chevronLeft} alt="Voltar" onClick={handlePrevMonth} />
                <p>{formatCurrentMonth(currentMonth)}</p>
                <img src={chevronRight} alt="Avançar" onClick={handleNextMonth} />
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income} />
                <ResumeItem title='Despesas' value={expense} />
                <ResumeItem title='Balanço' value={income - expense} color={(income - expense) < 0 ? 'red' : 'green'} />
            </C.ResumeArea>
        </C.Box>
    )
}