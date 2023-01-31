import { Component } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { ActivatedRoute } from '@angular/router';
import { LivroJson } from 'src/app/Interfaces/LivroSolo';

@Component({
  selector: 'app-http-teste-um',
  templateUrl: './http-teste-um.component.html',
  styleUrls: ['./http-teste-um.component.css']
})
export class HttpTesteUmComponent {
  livro?:LivroJson.LivroSolo;
  
constructor(private list:ListService,private route: ActivatedRoute){
  this.getLivro()
}
getLivro():void{
  const isbn = Number(this.route.snapshot.paramMap.get("isbn"));
  this.list.GetUnic(isbn).subscribe(x => {this.livro = x});
}


}
