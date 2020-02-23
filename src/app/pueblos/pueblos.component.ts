import { Component, OnInit, Input } from '@angular/core';
import { BuscarPueblosService } from '../buscar-pueblos.service';
@Component({
  selector: 'app-pueblos',
  templateUrl: './pueblos.component.html',
  styleUrls: ['./pueblos.component.css']
})
export class PueblosComponent implements OnInit {
  pueblos = null;
  constructor(private servicio:BuscarPueblosService) { }
  ngOnInit(): void {
    this.servicio.getPueblos().subscribe(pueblos =>{
      this.pueblos = pueblos;
    })
  }
}
