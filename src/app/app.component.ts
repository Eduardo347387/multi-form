import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	paso: number = 1;

	

// Creación de un arreglo de objetos
	arregloDeObjetos: any[] = [
		{ namePlan: 'Arcatede', costo: 0 },
		{ propiedad1: 'otroValor', propiedad2: 10 },
	];

	// your form
	formInfo: FormGroup

	// select plan
	arcade: number = 9;
	Advanced: number = 12;
	pro: number = 15;
	displayMes = false
	plazo:string  = 'month'
	isChecked: boolean = false;
	
	// add-ons
	onlineServicio: number = 1;
    LargerStorage: number = 2;
	CustomizableProfile: number = 2
	plazo1:string = 'mo'
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

	// FORMULARIO YOUR INFO
	hasError(controlName: string, errorType: string) {
		return this.formInfo.get(controlName)?.hasError(errorType) && this.formInfo.get(controlName)?.touched
	}
	valid(controlName: string) {
		return this.formInfo.get(controlName)?.valid
	}

	// FORMULARIO SELECT-PLAN
	timePlan(event:any) {
		if (event.target.checked) {
			//form-select-plan
			this.isChecked = true;
			this.displayMes = event.target.checked
			this.plazo = 'year'
			this.arcade = 90
			this.Advanced = 120
			this.pro = 150
			// form-pick-add-ons
			this.plazo1 = 'yr'
			this.onlineServicio = 10
			this.LargerStorage = 20
			this.CustomizableProfile = 20
		} else {
			//form-select-plan
			this.displayMes = false
			this.arcade = 9;
			this.Advanced = 12;
			this.pro = 15;
			// form-pick-add-ons
			this.plazo1 = 'mo'
			this.onlineServicio = 1
			this.LargerStorage = 2
			this.CustomizableProfile = 2
		}
		console.log(this.isChecked)
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
