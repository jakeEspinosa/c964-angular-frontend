import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Component({
  selector: 'app-main-content-input',
  templateUrl: './main-content-input.html',
  styleUrl: './main-content-input.css',
  imports: [ReactiveFormsModule],
})
export class MainContentInput {
  constructor(private http: HttpClient) {}
  inputText = new FormControl('');
  data: string | '0' = '0';
  negative: number | null = null;
  positive: number | null = null;

  onSubmit(event: Event) {
    const url = 'http://165.227.242.98:5000/api';
    const payload = { msg: this.inputText.value };

    this.http.post<{ result: string }>(url, payload).subscribe({
      next: (response) => {
        this.data = response.result;
        this.positive = Math.trunc(parseFloat(response.result) * 100);
        this.negative = 100 - Math.trunc(parseFloat(response.result) * 100);
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }
}
