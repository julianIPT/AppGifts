import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GiftPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GiftPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiftModule { }
