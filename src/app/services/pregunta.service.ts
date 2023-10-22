import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }
  public listarPreguntasDelExamen(examenId:any){
    return this.http.get(`${baseUrl}/pregunta/examen/todos/${examenId}`);
  }
  public guardarPregunta(pregunta: any){
    return this.http.post(`${baseUrl}/pregunta/`,pregunta);
  }
  public eliminarPregunta(preguntaId:any){
    return this.http.delete(`${baseUrl}/pregunta/${preguntaId}`);
  }

  public actualizarPregunta(pregunta:any){
    return this.http.put(`${baseUrl}/pregunta/`,pregunta);
  }

  public obtenerPregunta(preguntaId:any){
    return this.http.get(`${baseUrl}/pregunta/${preguntaId}`);
  }

  public listarPreguntasDelExamenParaLaPrueba(examenId:any){
    return this.http.get(`${baseUrl}/pregunta/examen/todos/${examenId}`);
  }

  public evaluarExamen(preguntas:any){
    return this.http.post(`${baseUrl}/pregunta/evaluar-examen`,preguntas);
  }
}
