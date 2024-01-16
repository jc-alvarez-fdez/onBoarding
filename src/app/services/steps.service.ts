import { Injectable } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

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
  ]

}
