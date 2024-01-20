import { Component, Input } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

  @Input() frases!: IStep[]; // Entrada de las frases desde el componente padre
  @Input() currentStepIndex: number = 0; // Índice de la frase actual

  // Getter para obtener la frase actual
  get currentStep(): IStep {
    return this.frases[this.currentStepIndex];
  }

  // Método para avanzar a la siguiente frase
  nextStep(): void {
    if (this.currentStepIndex < this.frases.length - 1) {
      this.currentStepIndex++;
    }
  }

  // Método para retroceder a la frase anterior
  prevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  // Método para ir directamente a una frase específica
  goStep(index: number): void {
    if(index >= 0 && index < this.frases.length) {
      this.currentStepIndex = index;

    }
  }

}
