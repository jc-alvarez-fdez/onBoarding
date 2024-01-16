import { Component, Input } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

 @Input()
  public frasesLista: IStep [] = [
    {
      title: "titulo",
      descripction:"descripcion"
    }
  ];



}
