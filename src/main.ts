import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { mockforme } from 'mockforme';

const env: string = 'development';

if (env === 'development') {
  /**
   * You can get ACCESS_TOKEN from mockforme dashboard
   * https://dashboard.mockforme.com/user/token
   */
  mockforme().run((apis) => {
    console.log(apis);
  });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
