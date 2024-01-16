import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-your-info',
  templateUrl: './your-info.component.html',
  styleUrls: ['./your-info.component.scss']
})
export class YourInfoComponent{
  formInfo: FormGroup

  constructor(private form: FormBuilder) { 

    this.formInfo = this.form.group(
      {
      nombre: ['', [Validators.required,Validators.minLength(3)]],
      gmail: ['', [Validators.required, Validators.email]],
      numero: ['',[Validators.required,Validators.minLength(10)]],
    })
  } 

  


  hasError(controlName: string, errorType: string) {
    return this.formInfo.get(controlName)?.hasError(errorType) && this.formInfo.get(controlName)?.touched
  }

  valid(controlName: string) {
    return this.formInfo.get(controlName)?.valid
  }


  // enviar() {
  //   // console.log(this.formInfo.valid)
  // }
}
