import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
NomeTeste:string = 'Ola';

Emitidor(evento: any){
  console.log(evento);
}
}
