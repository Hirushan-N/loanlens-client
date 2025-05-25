import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('loanAmountInput') loanAmountInput!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loanAmountInput?.nativeElement.focus();
    }, 100);
  }

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.form = this.fb.group({
      loanAmount: [null, [Validators.required, Validators.min(1000)]],
      interestRate: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
      tenureMonths: [null, [Validators.required, Validators.min(1)]],
      monthlyIncome: [null, [Validators.required, Validators.min(1)]]
    });
  }

  focusNext(nextEl: HTMLElement): void {
    nextEl.focus();
  }

  handleLastFieldEnter(submitBtn: HTMLElement): void {
    if (this.form.valid) {
      submitBtn.focus();
    } else {
      this.focusFirstInvalid();
    }
  }  
  
  focusFirstInvalid(): void {
    const firstInvalidControl = Object.keys(this.form.controls).find(key => this.form.get(key)?.invalid);
    if (firstInvalidControl) {
      const el = document.querySelector(`[formControlName="${firstInvalidControl}"]`) as HTMLElement;
      el?.focus();
    }
  }  

  onFieldExit(fieldName: string): void {
    const control = this.form.get(fieldName);
    if (control && control.invalid) {
      control.markAsTouched();
    }
  }
  
  isInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return !!(control && control.touched && control.invalid);
  }
  
  getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    if (!control || !control.errors) return '';
  
    if (control.errors['required']) return 'This field is required.';
    if (control.errors['min']) return `Value must be at least ${control.errors['min'].min}.`;
    if (control.errors['max']) return `Value cannot exceed ${control.errors['max'].max}.`;
  
    return 'Invalid input.';
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
