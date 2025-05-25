import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  constructor(private router: Router) {}

  navigateToForm(): void {
    const splash = document.querySelector('.splash-container');
    splash?.classList.add('fade-out');
  
    setTimeout(() => {
      this.router.navigate(['/loan']);
    }, 700);
  }
  
}
