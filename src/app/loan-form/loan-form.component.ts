import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoanService } from '../core/services/loan.service';
import { LoanResultDto } from '../core/models/loan.model';

@Component({
  selector: 'app-loan-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent {
  form: FormGroup;
  result: LoanResultDto | null = null;

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.form = this.fb.group({
      loanAmount: [null, [Validators.required, Validators.min(1000)]],
      interestRate: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
      tenureMonths: [null, [Validators.required, Validators.min(1)]],
      monthlyIncome: [null, [Validators.required, Validators.min(1)]]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loanService.checkEligibility(this.form.value).subscribe({
      next: (res) => this.result = res,
      error: () => alert('Something went wrong. Please try again.')
    });
  }
}
