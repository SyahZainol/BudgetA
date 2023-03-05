import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/public/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/public/welcome/welcome.component';
import { ExpenseComponent } from './pages/public/expense/expense.component';
import { IncomeComponent } from './pages/public/income/income.component';
import { SavingComponent } from './pages/public/saving/saving.component';

const routes: Routes = [
  {path: '',
component: WelcomeComponent
},
{path: 'dashboard',
component: DashboardComponent, 
},
{path: 'income',
component: IncomeComponent, 
},
{path: 'expense',
component: ExpenseComponent, 
},
{path: 'saving',
component: SavingComponent, 
}

]
// {path: 'tutorial',
// component: WelcomeComponent
// }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
