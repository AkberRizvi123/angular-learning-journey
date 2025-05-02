import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculateInvestmentData = new EventEmitter<InvestmentData>();
  calculateInvestmentData = output<InvestmentData>();
  // initialInvestment = '0';
  // annualInvestment = '0';
  // expectedReturn = '5';
  // duration = '10';

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    // Handle form submission logic here

    // not using signal
    // this.calculateInvestmentData.emit({
    //   initialInvestment: +this.initialInvestment, //+ converts string to number
    //   annualInvestment: +this.annualInvestment,
    //   expectedReturn: +this.expectedReturn,
    //   duration: +this.duration,
    // });

    // using signal
    this.calculateInvestmentData.emit({
      initialInvestment: +this.initialInvestment(), //+ converts string to number
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    // Reset the form fields after submission
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
