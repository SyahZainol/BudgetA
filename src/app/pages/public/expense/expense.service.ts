import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  api = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAllExpenses(){
    console.log("service expense");
    return this.http.get<Expense[]>(this.api + "/api/expenses");
  }
}
