import { Component } from '@angular/core';
import { IStep } from '../interfaces/i-step-interface';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(public stepService: StepsService) {

  }
}
