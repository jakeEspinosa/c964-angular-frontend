import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, { providers: [importProvidersFrom(HttpClientModule)] }).catch((err) =>
  console.error(err)
);
