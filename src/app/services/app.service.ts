import {Injectable} from "@angular/core";

@Injectable()
export class AppService {

  getNomes() {
    return ['Marcelo', 'Jessyca', 'Estrela', 'Academia'];
  }
}
