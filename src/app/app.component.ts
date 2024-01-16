import { Component } from '@angular/core';
import { YourInfoComponent } from './your-info/your-info.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formularioActual: number = 1;
  sniper: boolean = false;
  formEnd: boolean = false
  statusForm?:boolean
  siguientePaso() {
    console.log(this.statusForm)
    // Lógica para determinar el próximo formulario
    if (this.statusForm && this.formularioActual === 1) {
      this.formularioActual++;
      return
    }
    else if(this.formularioActual === 2 || this.formularioActual === 3 || this.formularioActual === 4  ) {
      this.formularioActual++;
      return
    } 
    
    // Puedes agregar lógica adicional aquí según tus necesidades    
    
    if (this.formularioActual === 5) {
      console.log(this.formularioActual)
      this.sniper = true
      setTimeout(() => {
        this.sniper = false
        this.formEnd = true
      },3000);
    }
  }
  volver() {
    this.formularioActual--
  }

  recibirStatus(status: boolean) {
    this.statusForm = status
  }

 
}
