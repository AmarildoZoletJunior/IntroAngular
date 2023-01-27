import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent {
decisao: boolean = true;
decisaoAbaixo: boolean = true;
nome = 'Amarildo'
teste = ()=>{
  if(this.nome == 'Amarildo'){
    this.nome = 'Arnaldo';
  }else{
    this.nome = 'Amarildo';
  }
}
}
