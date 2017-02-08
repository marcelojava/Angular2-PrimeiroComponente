import { Component } from '@angular/core';
import {AppService} from "./services/app.service";

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

  constructor(appService : AppService) {
    this.nomes = appService.getNomes();
  }
}
