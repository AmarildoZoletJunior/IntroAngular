import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'teste',
  templateUrl: './emitter-teste.component.html',
  styleUrls: ['./emitter-teste.component.css']
})
export class EmitterTesteComponent {
  @Input() teste = '';
  @Output() testandoEmitter = new EventEmitter();

  testandoClique():void {
    this.testandoEmitter.emit("Estou emitindo algo");
  }
}
