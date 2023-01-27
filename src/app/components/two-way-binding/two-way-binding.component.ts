import { Component } from '@angular/core';
import { Professional } from 'src/app/Interfaces/Professional';

@Component({
  selector: 'binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  nome:string = '';
  itens: Professional[] =[
    {id:1,name:'Amarildo',profissao:'Desenvolvedor',idade:10},
    {id:1,name:'Erik',profissao:'Desenvolvedor',idade:40},
    {id:1,name:'Vinicius',profissao:'Desenvolvedor',idade:30},
    {id:1,name:'Jose',profissao:'Desenvolvedor',idade:20},
  ]
}
