import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailGenerator } from './components/email-generator/email-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailGenerator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('email-writer-frontend');
}
