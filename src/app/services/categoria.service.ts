import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }
  public listarCategorias(){
    return this.http.get(`${baseUrl}/categoria/`);
  }

  public agregarCategoria(categoria:any){
    return this.http.post(`${baseUrl}/categoria/`,categoria)
  }
}
