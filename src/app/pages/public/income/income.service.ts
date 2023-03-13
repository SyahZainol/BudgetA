import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Income } from './income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  api = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAllIncomes(){
    console.log("service income");
    return this.http.get<Income[]>(this.api + "/api/incomes");
  }
}
