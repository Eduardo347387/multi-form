import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	paso: number = 1;

	// your form
	formInfo: FormGroup

	// select plan
	arcade: number = 9;
	Advanced: number = 12;
	pro: number = 15;

	// add-ons
	serviciovalue1: number = 1;
    serviciovalue2: number = 2;

	// fin formulario
	sniper: boolean = false;
	formEnd: boolean = false
	

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

	siguientePaso() {
		// Lógica para determinar el próximo formulario
		
		// Puedes agregar lógica adicional aquí según tus necesidades    
		if (this.formInfo.valid) {
			this.paso++
		}

		if (this.paso === 5) {
		this.sniper = true
		setTimeout(() => {
			this.sniper = false
			this.formEnd = true
		},3000);
		}
	}
	volver() {
		this.paso--
	}

	

 
}
