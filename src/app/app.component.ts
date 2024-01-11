import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formularioActual:number = 1;
  siguientePaso() {
    // Lógica para determinar el próximo formulario
    this.formularioActual++;
    // Puedes agregar lógica adicional aquí según tus necesidades
  }
}
