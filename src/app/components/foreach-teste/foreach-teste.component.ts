import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import {Professional} from 'src/app/Interfaces/Professional';

import { ListService } from 'src/app/service/list.service';
@Component({
  selector: 'testeForeach',
  templateUrl: './foreach-teste.component.html',
  styleUrls: ['./foreach-teste.component.css']
})
export class ForeachTesteComponent {
items: Professional[] = [
  {id:1,name:'Amarildo', profissao:'Desenvolvedor', idade: 20},
  {id:2,name:'Bruno', profissao:'Desenvolvedor',idade: 52},
  {id:3,name:'Tiago', profissao:'Desenvolvedor',idade: 17},
  {id:4,name:'Jose', profissao:'Desenvolvedor',idade: 36},
  {id:5,name:'Jose', profissao:'Desenvolvedor',idade: 40}
]
Aviso = '';
dispararEvento(item: Professional):void {
  console.log(`${item.name},${item.profissao},${item.idade}`);
}

constructor(private listService: ListService){

}

RemoverProfessional(pessoa: Professional){
  console.log("Removendo pessoa");
  this.items = this.listService.remover(this.items,pessoa);
}
}
