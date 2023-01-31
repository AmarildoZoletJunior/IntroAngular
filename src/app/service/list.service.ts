import { Injectable } from '@angular/core';
import { Professional } from '../Interfaces/Professional';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../Interfaces/Livro';
import { LivroJson } from '../Interfaces/LivroSolo';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl: string = 'https://localhost:5000/Book/All';
  constructor(private http: HttpClient) { }

  remover(pessoas: Professional[], pessoa: Professional) {
    console.log("Ativando serviço" + pessoas);
    return pessoas.filter(x => x.id != pessoa.id);
  }

  GetAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>('https://localhost:5000/Book/All');
  }
  GetUnic(isbn: number): Observable<LivroJson.LivroSolo> {
    return this.http.get<LivroJson.LivroSolo>('https://localhost:5000/Book/' + isbn);
  }
  DeleteBook(isbn: number): Observable<Livro[]> {
    console.log(this.http.delete<Livro[]>('https://localhost:5000/Book/' + isbn))
    return this.http.delete<Livro[]>('https://localhost:5000/Book/' + isbn);
  }
}
