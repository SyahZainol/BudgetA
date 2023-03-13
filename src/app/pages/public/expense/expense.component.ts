import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    const token = localStorage.getItem('id_token');
    const headers = { Authorization: `Bearer ${token}` };

    this.expenseService.getAllExpenses().subscribe({
      next: (values) => {
        console.log("values", values)
        this.expenses = values;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
