import { Component } from '@angular/core';
import { AppHeader } from './header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [AppHeader],
})
export class App {}
