import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./_syleMovile.scss', './_styleDesktop.scss']
})
export class AppComponent implements OnInit{	
	// Creación de un arreglo de objetos

	plans = [
		{ name: 'Arcade', price: 9, contrato: 'month'},
		{ name: 'Advanced', price: 12, contrato: 'month'},
		{ name: 'Pro', price: 15, contrato: 'month'} 
	];

	pick_add_ons = [
		{ name: 'Online service', price: 1, contrato: 'month'},
		{ name: 'Larger storage', price: 2, contrato: 'month'},
		{ name: 'Customizable Profile', price: 2, contrato: 'month'}
	]

	infoUser = [
		{ name: 'Arcade', price: 9, contrato: 'month' }
	];

	statusChecks = [
		{check: false },
		{check: false },
		{check: false}
	]

	//FORMULARIO GENERAL
	paso:number = 1
	nameButton:string = 'Next Step'
	// your form
	formInfo: FormGroup

	// select plan
	displayMes = false
	isChecked: boolean = false;
	opcionSeleccionada:number = 1
	// fin formulario
	sniper: boolean = false;
	formEnd: boolean = false
	total:number = 0
	

	constructor(private form: FormBuilder) { 
		this.formInfo = this.form.group(
		{
		nombre: ['', [Validators.required,Validators.minLength(3)]],
		gmail: ['', [Validators.required, Validators.email]],
		numero: ['',[Validators.required,Validators.minLength(10)]],
		})
	} 
	

	ngOnInit(): void {
		this.statusChecks[0].check = true
		this.infoUser = [...this.infoUser, this.pick_add_ons[0]]
		this.sumaTotal()
	}

	// FORMULARIO 1 YOUR INFO
	hasError(controlName: string, errorType: string) {
		return this.formInfo.get(controlName)?.hasError(errorType) && this.formInfo.get(controlName)?.touched
	}
	valid(controlName: string) {
		return this.formInfo.get(controlName)?.valid
	}

	// FORMULARIO 2 SELECT-PLAN
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
			// form-pick-add-ons
			this.syncContrato()
			this.pick_add_ons[0].price = 10
			this.pick_add_ons[1].price = 20
			this.pick_add_ons[2].price = 20

		} else {
			//form-select-plan
			this.displayMes = false
			this.plans[0].price = 9
			this.plans[1].price = 12
			this.plans[2].price = 15
			this.plans[0].contrato = 'month'
			this.plans[1].contrato = 'month'
			this.plans[2].contrato = 'month'
			// form-pick-add-ons
			this.syncContrato()
			this.pick_add_ons[0].price = 1
			this.pick_add_ons[1].price = 2
			this.pick_add_ons[2].price = 2
	
		}
		this.actualizarPlanes()
	}

	selectPlan(option: number) {
		this.opcionSeleccionada = option
		this.actualizarPlanes()
	}
	actualizarPlanes(){
		const selectedPlan = this.plans[this.opcionSeleccionada - 1];
		this.infoUser[0].name = selectedPlan.name;
		this.infoUser[0].price = selectedPlan.price;
		this.infoUser[0].contrato = selectedPlan.contrato
		this.sumaTotal()
	}

	//Form Pick Add-Ons

	selectPick(e:any, option: number) {
		if (e.target.checked) {
			this.statusChecks[option - 1].check = true
			this.infoUser = [...this.infoUser, this.pick_add_ons[option - 1]]
		} else {
			this.infoUser = this.infoUser.filter(pick => pick !== this.pick_add_ons[option-1])
		}
		this.sumaTotal()
	}
	
	syncContrato() {
		const contratoValue = this.plans[0].contrato;
		this.pick_add_ons.forEach(pick=> pick.contrato = contratoValue)
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
	sumaTotal() {
		this.total = this.infoUser.reduce((acumulador,product)=> acumulador + product.price,0)
	}
	siguientePaso() {
		// Lógica para determinar el próximo formulario
		
		// Puedes agregar lógica adicional aquí según tus necesidades 
		if (this.formInfo.valid) {
			this.paso++
		}

		if (this.paso === 4) {
			this.nameButton ='Confirm'
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
		if (this.paso < 4) {
			this.nameButton ='Next Step'
		}
	}
 
}
