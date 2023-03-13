
export interface Income {
    id: number;
    name: String;
    price: BigInt;
    dateline: Date;
}
  
  export type NewExpense = Omit<Income, 'id'> & { id: null };