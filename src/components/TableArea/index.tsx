import { ItemType } from '../../types/ItemType'
import { TableItem } from '../TableItem'
import * as C from './styles'

type Props = {
    list: ItemType[]
}

export const TableArea = ({ list }: Props) => {

    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn className='categoryCol' width={140}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={180}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width={120}>Data</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} data={item} />
                ))}
            </tbody>
        </C.Table>
    )
}