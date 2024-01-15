import { Component } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {
  arcade: number = 9;
  Advanced: number = 12;
  pro: number = 15;
}
