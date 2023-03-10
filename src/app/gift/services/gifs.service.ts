import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey : string= 't4MH4b3TZyngVRsfhoH5TM9w65dsmzOu';
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  // TODO: Cambiar any por su tipo correspondiente
  public resultados: Gif[] =[];

  constructor(private http:HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')! );
    // }
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial(){
    // this._historial = this._historial.splice(0,10); //corto el arreglo principal pero no es bueno hacerlo
    return [...this._historial]
  }
  buscarGifts(query:string = ''){//decirle al string es igual a q tendra algun valor.
    query=query.trim().toLocaleLowerCase();// trim sirve para ahorrarse de los espacios adelante y atras, y transformar tido en minuscula
    if (!this._historial.includes(query)) {// si no incluye en el array _historial entonces
    this._historial.unshift(query);// agregueme al array
    this._historial = this._historial.splice(0,10);

    localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('q',query)
          .set('limit', '10');

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{ params })
      .subscribe((resp) =>{
        this.resultados =resp.data
        localStorage.setItem('resultados',JSON.stringify(this.resultados));
      });

  }
}
