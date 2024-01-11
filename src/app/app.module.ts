import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YourInfoComponent } from './your-info/your-info.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    YourInfoComponent,
    FormButtonComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
