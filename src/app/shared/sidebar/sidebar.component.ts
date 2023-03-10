import { Component } from '@angular/core';
import { GifsService } from '../../gift/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gifsService:GifsService) {

  }


  get historial(){
    return this.gifsService.historial;
  }

  buscar(termino:string){
    return this.gifsService.buscarGifts(termino)
  }
}
