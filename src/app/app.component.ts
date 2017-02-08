import { Component } from '@angular/core';
import {AppService} from "./services/app.service";
import {count} from "rxjs/operator/count";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AppService]
})
export class AppComponent {
  title = 'app works!';
  nomes = [];
  imagem = 'http://lorempixel.com/400/200/';
  count : number = 0;
  nome : string = '';

  constructor(appService : AppService) {
    this.nomes = appService.getNomes();
  }

  onClick() {
    alert('Botao clicado');
  }

  countCaracter(event:any){
    if (event.keyCode == 8) {
      this.count = this.count - 1;
    } else {
      this.count = this.count + 1;
    }
  }
}
