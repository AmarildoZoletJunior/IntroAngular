import { Injectable } from '@angular/core';
import { Professional } from '../Interfaces/Professional';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Livro} from '../Interfaces/Livro';

@Injectable({
  providedIn: 'root'
})
export class ListService {
private apiUrl:string = 'https://localhost:5000/Book/All';
  constructor(private http:HttpClient) { }
  
    remover(pessoas: Professional[], pessoa: Professional){
      console.log("Ativando serviço" + pessoas);
      return pessoas.filter(x => x.id != pessoa.id);
    } 

    GetAll(): Observable<Livro[]>{
return this.http.get<Livro[]>(this.apiUrl);
    }
}
