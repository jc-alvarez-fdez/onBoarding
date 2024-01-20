import { Component } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  frases: IStep[];
  currentStepIndex: number = 0;

  // Defino la variable a pasar al componente hijo con el array des steps.service (frases)

  constructor(private stepsService: StepsService) {
    this.frases = stepsService.frases;
  }
}
