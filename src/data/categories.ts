import { CategoryType } from './../types/CategoryType';

export const categories: CategoryType = {
    salary: { title: 'Salário', color: '#2b9720', expense: false },
    food: { title: 'Alimentação', color: '#ed254e', expense: true },
    rent: { title: 'Contas', color: '#e28413', expense: true },
    travel: { title: 'Passeio', color: '#730071', expense: true },
    buy: { title: 'Compras', color: '#0b4f6c', expense: true }
}