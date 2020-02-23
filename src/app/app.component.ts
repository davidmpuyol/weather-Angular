import { Component, Input,ViewChild } from '@angular/core';
import { BuscarPueblosService } from './buscar-pueblos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private pueblosService: BuscarPueblosService, private router: Router) { }
  title = 'weather';
  texto = "";
  pueblos = [];
  buscarPueblos(){
    this.router.navigateByUrl('/buscarpueblo');
    this.pueblos = this.pueblosService.buscarPueblos(this.texto);
    console.log(this.pueblos);
  }
}
