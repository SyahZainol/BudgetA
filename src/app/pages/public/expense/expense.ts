
export interface Expense {
    id: number;
    name: String;
    price: BigInt;
    dateline: Date;
}
  
  export type NewExpense = Omit<Expense, 'id'> & { id: null };