import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content-input',
  templateUrl: './main-content-input.html',
  styleUrl: './main-content-input.css',
  imports: [ReactiveFormsModule],
})
export class MainContentInput {
  inputText = new FormControl('');
}
