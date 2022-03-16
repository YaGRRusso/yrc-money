import * as C from './App.styles'
import { ItemType } from './types/ItemType'
import { CategoryType } from './types/CategoryType'
import { categories } from './data/categories'
import { items } from './data/items'
import { useEffect, useState } from 'react'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<ItemType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <>
      <C.Header>
        <C.Container>
          <C.HeaderText>YRC Money</C.HeaderText>
        </C.Container>
      </C.Header>
      <C.Body>
        <C.Container>
          <InfoArea month={currentMonth} />
          <TableArea list={filteredList} />
        </C.Container>
      </C.Body>
      <C.Footer>
        Desenvolvido de ❤ por Yago Russo Cabral
      </C.Footer>
    </>
  )
}

export default App;