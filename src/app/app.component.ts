import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeiroProject';
  ObjectCar = {
    name: "Uno",
    motor: 110,
    color: "Red"
  }
  username: string = "Joaquim"
}
