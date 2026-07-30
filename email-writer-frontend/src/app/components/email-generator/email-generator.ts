import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Email } from '../../services/email';
import { EmailRequest } from '../../models/email-request';

@Component({
  selector: 'app-email-generator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './email-generator.html',
  styleUrl: './email-generator.css'
})
export class EmailGenerator {

  reply: string = '';
  loading: boolean = false;

  emailForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private email: Email
  ) {

    this.emailForm = this.fb.group({
      emailContent: ['', Validators.required],
      tone: ['Professional']
    });

  }

  generateReply(): void {

    if (this.emailForm.invalid) {
      return;
    }

    this.loading = true;

    const request: EmailRequest = this.emailForm.value as EmailRequest;

    this.email.generateReply(request).subscribe({

      next: (response: string) => {
        this.reply = response;
        this.loading = false;
      },

      error: (error) => {
        console.error(error);
        this.loading = false;
      }

    });

  }

}