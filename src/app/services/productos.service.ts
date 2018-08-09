import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductoIdx } from '../interfaces/producto_idx.iterface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: ProductoIdx[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
        .get(`${environment.firebase_url}productos_idx.json`)
        .subscribe( (data: ProductoIdx[]) => {
          this.productos = data;
          this.cargando = false;
        });
  }
}
