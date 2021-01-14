import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplosCore';
  @ViewChild('inputNombre',{static:true}) inputNombre: ElementRef;

  mostrar()
  {
    console.log(this.inputNombre.nativeElement.value)
    this.inputNombre.nativeElement.style.background = "cyan"
  }
}
