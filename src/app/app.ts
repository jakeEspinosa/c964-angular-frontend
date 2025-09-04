import { Component } from '@angular/core';
import { AppHeader } from './header/header';
import { MainContent } from './main-content/main-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [AppHeader, MainContent],
})
export class App {}
