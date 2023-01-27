import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
@Input() teste: string = '';
@Input() objeto01!: {name: string; motor:number ; color:string};
}
