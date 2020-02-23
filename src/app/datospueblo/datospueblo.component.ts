import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { DatospuebloService } from '../datospueblo.service';

@Component({
  selector: 'app-datospueblo',
  templateUrl: './datospueblo.component.html',
  styleUrls: ['./datospueblo.component.css']
})
export class DatospuebloComponent implements OnInit {
  @Input() codigoPueblo;
  codigo = "";
  datos = null;
  predicciones = null;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.codigo = params.get('codigopueblo');
      console.log(this.buscarCodigo(this.codigo));
    }
    )}
  public buscarCodigo(codigo){
    return this.httpClient.get("https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/"+codigo+"/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZG1wdXlvbEBnbWFpbC5jb20iLCJqdGkiOiJhNzFlN2E0Ny1mZDM5LTQ5ZTQtYjY0NC0yNDM3ZmY4ZjAzOWYiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU4MDE3NDk3MCwidXNlcklkIjoiYTcxZTdhNDctZmQzOS00OWU0LWI2NDQtMjQzN2ZmOGYwMzlmIiwicm9sZSI6IiJ9.9Ojy0N5L1pfEWxMSbqgHYmvsgCx9JCGVgfvGPwNjbyc").subscribe(
    (resultado) => {
      console.log(resultado);
      this.obtenerDatosPueblo(resultado);
    }
  )}
  public obtenerDatosPueblo(enlace){
    this.httpClient.get(enlace.datos).subscribe((datos)=>{
      console.log(datos[0]);
      this.datos = datos[0];
      this.predicciones = this.datos.prediccion.dia;
      this.predicciones.shift();
    });
  }
}
