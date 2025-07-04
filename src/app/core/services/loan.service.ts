import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanRequestDto, LoanResultDto } from '../models/loan.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private readonly apiUrl = `${environment.apiBaseUrl}/Loan/check-eligibility`;

  constructor(private http: HttpClient) {}

  checkEligibility(payload: LoanRequestDto): Observable<LoanResultDto> {
    console.log('Sending payload:', payload);
    return this.http.post<LoanResultDto>(this.apiUrl, payload);
  }
}
