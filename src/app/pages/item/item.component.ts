import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: Producto;
  id: string;

  constructor(
    public _productoService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( param => {
      this.id = param['id']

      this._productoService.getProducto(this.id)
          .subscribe( (data: Producto) => {
            this.producto = data;
          });
    });
  }

}
