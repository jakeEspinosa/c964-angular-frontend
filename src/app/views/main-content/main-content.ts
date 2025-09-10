import { Component } from '@angular/core';
import { MainContentInput } from './main-content-input/main-content-input';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
  imports: [MainContentInput],
})
export class MainContent {}
