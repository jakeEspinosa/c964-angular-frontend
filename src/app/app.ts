import { Component } from '@angular/core';
import { AppHeader } from './header/header';
import { MainContent } from './views/main-content/main-content';
import { AppFooter } from './footer/app-footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [AppHeader, MainContent, AppFooter],
})
export class App {}
