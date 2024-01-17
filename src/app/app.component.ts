import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{	
	// Creación de un arreglo de objetos

	plans = [
		{ name: 'Arcade', price: 9, contrato: 'month'},
		{ name: 'Advanced', price: 12, contrato: 'month'},
		{ name: 'Pro', price: 15, contrato: 'month'} 
	];

	infoUser = [
		{ namePlan: 'Arcade', costo: 9, contrato: 'month' },
		{}
	];

	paso:number = 1

	// your form
	formInfo: FormGroup

	// select plan
	displayMes = false
	isChecked: boolean = false;
	opcionSeleccionada:number = 1
	// add-ons
	onlineServicio: number = 1;
    LargerStorage: number = 2;
	CustomizableProfile: number = 2
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
	

	ngOnInit(): void {
		// console.log(this.infoUser[0].costo)
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
			this.plans[0].price = 90
			this.plans[1].price = 120
			this.plans[2].price = 150
			this.plans[0].contrato = 'year'
			this.plans[1].contrato = 'year'
			this.plans[2].contrato = 'year'
			this.actualizarPlanes()
			// form-pick-add-ons
			this.onlineServicio = 10
			this.LargerStorage = 20
			this.CustomizableProfile = 20
		} else {
			//form-select-plan
			this.displayMes = false
			this.plans[0].price = 9
			this.plans[1].price = 12
			this.plans[2].price = 15
			this.plans[0].contrato = 'month'
			this.plans[1].contrato = 'month'
			this.plans[2].contrato = 'month'
			this.actualizarPlanes()
			// form-pick-add-ons
			this.onlineServicio = 1
			this.LargerStorage = 2
			this.CustomizableProfile = 2
		}
		console.log(this.isChecked)
	}

	selectPlan(option: number) {
		this.opcionSeleccionada = option
		this.actualizarPlanes()
	}

	actualizarPlanes(){
		const selectedPlan = this.plans[this.opcionSeleccionada - 1];
		this.infoUser[0].namePlan = selectedPlan.name;
		this.infoUser[0].costo = selectedPlan.price;
		this.infoUser[0].contrato = selectedPlan.contrato
	}

	//Form Summary

	obtenetContratoAbreviado(contrato: string | undefined): string {
		if (contrato !== undefined) {
			if (contrato === 'month') {
				return 'mo'
			} else if (contrato === 'year') {
				return 'yr'
			} else {
			return contrato
			}
		} else {
			return 'N/A'; 
		}
	}

	volvePaso2() {
		this.paso = 2
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
