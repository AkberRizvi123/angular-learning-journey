import { Injectable, signal } from '@angular/core';
import { AnnualData, InvestmentData } from './investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  // annualData?: AnnualData[];
  annualData = signal<AnnualData[] | undefined>(undefined);
  calculateInvestmentResults(investmentData: InvestmentData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      investmentData;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    // this.annualData = annualData;
    this.annualData.set(annualData);
  }
}
