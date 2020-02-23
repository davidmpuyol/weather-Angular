import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-dia',
  templateUrl: './card-dia.component.html',
  styleUrls: ['./card-dia.component.css']
})
export class CardDiaComponent implements OnInit {
  @Input() datos;
  url = "../../assets/tiempo/";
  prediccion = null;
  constructor() { }

  ngOnInit(): void {
    this.comprobarURL();
  }
  comprobarURL(){
    let estadoCielo = this.datos.estadoCielo[0].descripcion;
    console.log(estadoCielo);
    let urlImagen = "";
    switch(estadoCielo){
      case "Despejado":
        urlImagen = "despejado.png";
        break;
      case "Muy nuboso":
        urlImagen = "nublado.png"
        break;
      case "Intervalos nubosos":
        urlImagen = "poco-nuboso.png";
        break;
      case "Poco nuboso":
        urlImagen = "poco-nuboso.png";
        break;
      case "Intervalos nubosos con lluvia escasa":
        urlImagen = "poca-lluvia.png";
        break;
      default:
        urlImagen = "niebla.png";
    }
    this.url += urlImagen;
  }

}
