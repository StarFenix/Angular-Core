import { Component, ElementRef, ViewChild } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplosCore';
  @ViewChild('inputNombre', {static: true}) inputNombre: ElementRef;
  @ViewChild(HijoComponent, {static: true}) hijo: HijoComponent;

  mostrar()
  {
    /* console.log(this.inputNombre.nativeElement.value)
    this.inputNombre.nativeElement.style.background = "cyan" */
    this.hijo.titulo = "Lo modifiqué desde el padre"

  }
}
