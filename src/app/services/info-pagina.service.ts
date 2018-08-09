import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/infoPagina.interface';
import { Equipo } from '../interfaces/equipo.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: Equipo[] = [];
  cargando = true;

  constructor(
    private http: HttpClient
  ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (data: InfoPagina) => {
        this.info = data;
      });
  }

  cargarEquipo() {
    this.http.get(`${environment.firebase_url}equipo.json`)
      .subscribe( (data: Equipo[]) => {
        this.equipo = data;
        this.cargando = false;
      });
  }
}
