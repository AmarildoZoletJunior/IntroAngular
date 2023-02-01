import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Livro } from 'src/app/Interfaces/Livro';
import { Professional } from 'src/app/Interfaces/Professional';

import { ListService } from 'src/app/service/list.service';
@Component({
  selector: 'testeForeach',
  templateUrl: './foreach-teste.component.html',
  styleUrls: ['./foreach-teste.component.css']
})
export class ForeachTesteComponent implements OnInit {
  items: Professional[] = [
    { id: 1, name: 'Amarildo', profissao: 'Desenvolvedor', idade: 20 },
    { id: 2, name: 'Bruno', profissao: 'Desenvolvedor', idade: 52 },
    { id: 3, name: 'Tiago', profissao: 'Desenvolvedor', idade: 17 },
    { id: 4, name: 'Jose', profissao: 'Desenvolvedor', idade: 36 },
    { id: 5, name: 'Jose', profissao: 'Desenvolvedor', idade: 40 }
  ]

  livros: Livro[] = [

  ]
  dispararEvento(item: Professional): void {
    console.log(`${item.name},${item.profissao},${item.idade}`);
  }

  constructor(private listService: ListService) {
  }
  ngOnInit(): void {
    this.getBook();
  }

  RemoverProfessional(pessoa: Professional) {
    console.log("Removendo pessoa");
    this.items = this.listService.remover(this.items, pessoa);
  }
  getBook(): void {
    
    this.listService.GetAll().subscribe(x => { 
      
      x.forEach(x => {
        let local = x.urlImage.indexOf("assets");
        let variavel = x.urlImage.slice(local,x.urlImage.length);
        x.urlImage = variavel;
      })
      this.livros = x 
    })
  }
  deletarLivro(isbn: number): void {
    this.livros = this.livros.filter(a => a.isbn != isbn);
    this.listService.DeleteBook(isbn).subscribe();
  }

}
