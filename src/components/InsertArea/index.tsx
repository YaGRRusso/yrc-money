import { useState } from 'react'
import { categories } from '../../data/categories'
import { ItemType } from '../../types/ItemType'
import * as C from './styles'

type Props = {
    onAdd: (item: ItemType) => void
}

export const InsertArea = ({ onAdd }: Props) => {
    const [categoryInput, setCategoryInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [valueInput, setValueInput] = useState(0);
    const [dateInput, setDateInput] = useState('');

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEv = () => {
        if (categoryInput && titleInput && valueInput && dateInput) {
            onAdd({
                category: categoryInput,
                title: titleInput,
                value: valueInput,
                date: new Date(dateInput)
            })
        } else {
            alert('Preencha todos os campos!')
        }
        setCategoryInput('')
        setTitleInput('')
        setValueInput(0)
        setDateInput('')
    }

    return (
        <C.Container>
            <C.Field>
                <span>Categoria</span>
                <select value={categoryInput} onChange={e => setCategoryInput(e.target.value)}>
                    <option></option>
                    {categoryKeys.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            </C.Field>
            <C.Field>
                <span>Titulo</span>
                <input type="text" value={titleInput} onChange={e => setTitleInput(e.target.value)} />
            </C.Field>
            <C.Field>
                <span>Valor</span>
                <input type="number" value={valueInput} onChange={e => setValueInput(+e.target.value)} />
            </C.Field>
            <C.Field>
                <span>Data</span>
                <input type="date" value={dateInput} onChange={e => setDateInput(e.target.value)} />
            </C.Field>
            <C.Field>
                <span>&nbsp;</span>
                <button onClick={handleAddEv}>Adicionar</button>
            </C.Field>
        </C.Container>
    )
}