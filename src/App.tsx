import * as C from './App.styles'
import { ItemType } from './types/ItemType'
import { items } from './data/items'
import { useEffect, useState } from 'react'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { categories } from './data/categories'
import { InsertArea } from './components/InsertArea'

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<ItemType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let inc = 0
    let exp = 0

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        exp += filteredList[i].value
      } else {
        inc += filteredList[i].value
      }
    }

    setIncome(inc)
    setExpense(exp)

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: ItemType) => {
    let newList = [...list]
    item.date.setMonth(item.date.getMonth() + 1)
    newList.push(item)
    setList(newList)
  }

  return (
    <>
      <C.Header>
        <C.Container>
          <C.HeaderText>YRC Money</C.HeaderText>
        </C.Container>
      </C.Header>
      <C.Body>
        <C.Container>
          <InfoArea currentMonth={currentMonth} monthChange={handleMonthChange} income={income} expense={expense} />
          <InsertArea onAdd={handleAddItem} />
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