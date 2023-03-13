import { Component, OnInit } from '@angular/core';

import { Income } from './income';
import { IncomeService } from './income.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  incomes: Income[] = [];

  constructor(private incomeService: IncomeService) { }

  ngOnInit() {
    this.getIncomes();
  }

  getIncomes() {
    const token = localStorage.getItem('id_token');
    const headers = { Authorization: `Bearer ${token}` };

    this.incomeService.getAllIncomes().subscribe({
      next: (values) => {
        console.log("values", values)
        this.incomes = values;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}