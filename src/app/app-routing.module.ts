import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPlanComponent } from './select-plan/select-plan.component';

const routes: Routes = [
  {path: 'selectplan',component:SelectPlanComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
