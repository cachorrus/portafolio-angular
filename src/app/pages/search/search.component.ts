import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    public _productosService: ProductosService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe( param => {
      this._productosService.buscarProductos(param['termino']);
    });
  }

}
