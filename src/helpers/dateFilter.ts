import { ItemType } from './../types/ItemType';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() - 1}`
}

export const filterListByMonth = (list: ItemType[], date: string): ItemType[] => {
    let newList: ItemType[] = []
    let [year, month] = date.split('-')

    for (let i in list) {
        if (list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() - 2 === parseInt(month)) {
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    return `${addZeroDate(day)}/${addZeroDate(month)}/${year}`
}
const addZeroDate = (n: number) => n < 10 ? `0${n}` : `${n}`