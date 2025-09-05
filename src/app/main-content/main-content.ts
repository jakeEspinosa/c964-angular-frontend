import { Component } from '@angular/core';
import { MainContentResult } from './main-content-result/main-content-result';
import { MainContentInput } from './main-content-input/main-content-input';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
  imports: [MainContentResult, MainContentInput],
})
export class MainContent {}
