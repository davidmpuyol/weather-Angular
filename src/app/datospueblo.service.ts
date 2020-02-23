import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatospuebloService {
  pueblos = null;
  constructor(public http: HttpClient) {
  }
  public buscarCodigo(codigo){
    let datos = null;
     return this.http.get("https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/"+codigo+"/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZG1wdXlvbEBnbWFpbC5jb20iLCJqdGkiOiJhNzFlN2E0Ny1mZDM5LTQ5ZTQtYjY0NC0yNDM3ZmY4ZjAzOWYiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU4MDE3NDk3MCwidXNlcklkIjoiYTcxZTdhNDctZmQzOS00OWU0LWI2NDQtMjQzN2ZmOGYwMzlmIiwicm9sZSI6IiJ9.9Ojy0N5L1pfEWxMSbqgHYmvsgCx9JCGVgfvGPwNjbyc").subscribe(
      (resultado) => {
        datos = this.obtenerDatosPueblo(resultado);
      }
    )}
  public obtenerDatosPueblo(enlace){
    let datos = null;
    return this.http.get(enlace.datos);
  }
}

