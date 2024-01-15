import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formularioActual: number= 1;
  sniper: boolean = false;
  formEnd:boolean = false
  siguientePaso() {
    // Lógica para determinar el próximo formulario
    this.formularioActual++;
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

 
}
