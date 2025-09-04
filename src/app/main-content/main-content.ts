import { Component } from '@angular/core';
import { MainContentResult } from './main-content-result/main-content-result';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
  imports: [MainContentResult],
})
export class MainContent {}
