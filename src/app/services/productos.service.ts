import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductoIdx } from '../interfaces/producto_idx.iterface';
import { Producto } from '../interfaces/producto.interface';
import { Observable, pipe } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos$: Observable<ProductoIdx[]>;
  productosFiltrados: ProductoIdx[] = [];

  constructor(private http: HttpClient) {
    this.productos$ = this.cargarProductos();
  }

  private cargarProductos(): Observable<ProductoIdx[]> {
    return this.http
            .get<ProductoIdx[]>(`${environment.firebase_url}productos_idx.json`)
            .pipe(
              shareReplay()
            );
        /*
        .subscribe( (data: ProductoIdx[]) => {
          this.productos = data;
          this.cargando = false;
        });
        */
  }

  getProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${environment.firebase_url}/productos/${id}.json`);
  }

  buscarProductos(termino: string) {
    termino = termino.toLocaleLowerCase();

    this.productos$.subscribe( datos => {
      this.productosFiltrados = datos.filter( (producto: ProductoIdx) => {

        const categoria = producto.categoria.toLocaleLowerCase();
        const titulo = producto.titulo.toLocaleLowerCase();

        if (categoria.includes(termino) || titulo.includes(termino)) {
          return true;
        } else {
          return false;
        }

      });
    });
  }
}
