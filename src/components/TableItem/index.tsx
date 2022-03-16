import * as C from './styles'
import { ItemType } from "../../types/ItemType"
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
    data: ItemType
}

export const TableItem = ({ data }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>
                <C.Category color={categories[data.category].color}>
                    {categories[data.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{data.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[data.category].expense ? 'red' : 'green'}>
                    R$ {data.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>{formatDate(data.date)}</C.TableColumn>
        </C.TableLine >
    )
}