import { Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoanFormComponent } from './loan-form/loan-form.component';

export const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'loan', component: LoanFormComponent },
  { path: '**', redirectTo: '' } // Fallback to splash
];
