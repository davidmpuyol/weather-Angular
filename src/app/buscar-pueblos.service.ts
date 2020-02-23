import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarPueblosService {
  private pueblosEnviar = new Subject<any>();
  pueblos = null;
  pueblosFiltrados = null;
  constructor(public http: HttpClient) {
    this.http.get('./assets/pueblos.json').subscribe(
      resultado => {
        this.pueblos = resultado;
        this.pueblosFiltrados = this.pueblos;
      }
    );
  }
  public getPueblos(): Observable<any>{
    return this.pueblosEnviar.asObservable();
  }
  public buscarPueblos(filtro){
    this.pueblosFiltrados = this.pueblos.filter((pueblo)=>{
      return pueblo.nombre.toUpperCase().includes(filtro.toUpperCase());
    })
    this.pueblosEnviar.next(this.pueblosFiltrados);
    return this.pueblosFiltrados;
  }
}
