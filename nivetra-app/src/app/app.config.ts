import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // ✅ Import your routes

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // ✅ Add routes here
  ]
};

