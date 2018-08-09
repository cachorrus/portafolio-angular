import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/infoPagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(
    private http: HttpClient
  ) {
    http.get('assets/data/data-pagina.json')
        .subscribe( (data: InfoPagina) => {
          this.cargada = true;
          this.info = data;
        });
  }
}
