import { Injectable } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  public pathImg: string = "../assets/images"; // Creo una variable para la ruta de las imágenes

  public frases: IStep[] = [

    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      img: `${this.pathImg}/time_managment.svg`,
      alt: "Il·lustració d'una persona organitzant el temps de treball",
      bgcolor: "#4da2a9"

    },
    {
      title: "Programa projectes propis:",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      img: `${this.pathImg}/programming.svg`,
      alt: "Il·lustració d'una persona programant al seu ordinador",
      bgcolor: "#9c7b7b"
    },
    {
      title: "Procura descansar:",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: `${this.pathImg}/meditation.svg`,
      alt:"Il·lustració d'una persona fent exercicis de relaxació",
      bgcolor: "#ac940e"
    }
  ];

}
