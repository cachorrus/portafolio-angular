import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _infoService: InfoPaginaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  buscarProducto(search: string) {

    if (search.trim().length < 1 ) {
      return;
    }

    this.router.navigate(['/search', search]);
  }

}
