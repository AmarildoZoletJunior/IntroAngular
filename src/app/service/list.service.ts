import { Injectable } from '@angular/core';
import { Professional } from '../Interfaces/Professional';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

    remover(pessoas: Professional[], pessoa: Professional){
      console.log("Ativando serviço" + pessoas);
      return pessoas.filter(x => x.id != pessoa.id);
    } 
}
