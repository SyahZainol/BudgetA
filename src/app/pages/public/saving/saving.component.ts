import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss']
})
export class SavingComponent {
  results = 0;

  budget : FormGroup = new FormGroup({
   expense: new FormControl(""),
   rent: new FormControl(""),
   utilities: new FormControl(""),
   food: new FormControl(""),
 });

 constructor(private router : Router){}

 calculate(){
   this.results = 0;
   let i = this.budget.get('expense')?.value;
   let r = this.budget.get('rent')?.value;
   let u = this.budget.get('utilities')?.value;
   let f = this.budget.get('food')?.value;

   console.log(i,r,u,f)

  
     this.results = i-(r+u+f);
  
}
} 