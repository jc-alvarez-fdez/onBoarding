import { Component, Input } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';

import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
/*   animations: [
    trigger('slideInOut', [
      transition(':enter', [
        query('.card-header, .card-body, .card-footer', [
          style({ opacity: 0, transform: 'translateX(-100%)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0%)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ], */
})

export class EscenaComponent {

  @Input() frases!: IStep[];
  @Input() currentStepIndex: number = 0;


  get currentStep(): IStep {
    return this.frases[this.currentStepIndex];
  }


  nextStep(): void {
    if (this.currentStepIndex < this.frases.length - 1) {
      this.currentStepIndex++;
    }
  }


  prevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }


  goStep(index: number): void {
    if(index >= 0 && index < this.frases.length) {
      this.currentStepIndex = index;

    }
  }

}
