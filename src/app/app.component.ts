import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{	
	// Creación de un arreglo de objetos
	arregloDeObjetos: any[] = [
		{ namePlan: 'Arcade', costo: 9 },
		{},
	];

	paso:number = 1

	// your form
	formInfo: FormGroup

	// select plan
	nameArcade: string = 'Arcade'
	nameAdvanced: string = 'Advanced'
	namePro: string = 'Pro'
	
	priceArcade: number = 9;
	priceAdvanced: number = 12;
	pricePro: number = 15;

	displayMes = false
	plazo:string  = 'month'
	isChecked: boolean = false;
	opcionSeleccionada:number = 1
	
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
	

	ngOnInit(): void {
		// console.log(this.arregloDeObjetos[0].costo)
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
			this.priceArcade = 90
			this.priceAdvanced = 120
			this.pricePro = 150
			this.actualizarPlanes()
			// form-pick-add-ons
			this.plazo1 = 'yr'
			this.onlineServicio = 10
			this.LargerStorage = 20
			this.CustomizableProfile = 20
		} else {
			//form-select-plan
			this.displayMes = false
			this.priceArcade = 9;
			this.priceAdvanced = 12;
			this.pricePro = 15;
			this.actualizarPlanes()
			// form-pick-add-ons
			this.plazo1 = 'mo'
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
		if (this.opcionSeleccionada === 1) {
			this.arregloDeObjetos[0].namePlan = this.nameArcade;
			this.arregloDeObjetos[0].costo = this.priceArcade;
		}
		if (this.opcionSeleccionada === 2) {
			this.arregloDeObjetos[0].namePlan = this.nameAdvanced;
			this.arregloDeObjetos[0].costo = this.priceAdvanced;
		}
		if (this.opcionSeleccionada === 3) {
			this.arregloDeObjetos[0].namePlan = this.namePro;
			this.arregloDeObjetos[0].costo = this.pricePro;
		}
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
