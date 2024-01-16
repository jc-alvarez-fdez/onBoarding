import { Component } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  // Variable en el padre (home) a pasar al hijo (escena)
  public frases: IStep [] = [

      {
        title: "Dedica moltes hores",
        descripction: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament."
      },
      {
        title: "Programa projectes propis:",
        descripction: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge."
      },
      {
        title: "Procura descansar:",
        descripction: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge."
      }
    ];

}
