# MockForMe Example with Angular

This repository demonstrates how to integrate [MockForMe](https://www.npmjs.com/package/mockforme)
 with an AngularJs project to easily mock APIs during development.

MockForMe allows developers to simulate backend APIs without writing boilerplate servers, making frontend development and testing much faster.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

# MockForMe Integration
You can mock your APIs in development using the MockForMe NPM package.

## Install `mockforme` as a dev dependency
### Yarn
```
yarn add mockforme -D
```
### NPM
```
npm install mockforme --save-dev
```


### Initialize mockforme in `src/main.ts`
```
import { mockforme } from 'mockforme';

const env: string = 'development';

if (env === 'development') {
  /*
  * Get ACCESS_TOKEN from https://dashboard.mockforme.com/user/token
  */
  const TOKEN: string = "ACCESS_TOKEN";
  mockforme(TOKEN).run((apis) => {
    console.log(apis);
  });
}
```
### Make a HTTP call inside `src/app/app.component.ts`
```
export class AppComponent {
  title = 'mockforme angularjs';
  
  userData = {}

  constructor() {}

  getUserData() {
    // Call the mockforme API to get user data
    fetch('/user/me')
      .then(response => response.json())
      .then(data => {
        this.userData = data;
      });
  }
}
```

### Create button in `src/app/app.component.html`
```
...
  <button (click)="getUserData()">Get User Data</button>

  ...
    <pre>{{ userData | json }}</pre>
  ...
...
```

> Once the configuration is complete, you can create mock APIs directly from the [MockForMe dashboard](https://dashboard.mockforme.com).
> Simply go to Create Collection → Create API → Define API Responses.
> 
> For this example, we’ve created a mock API with the **endpoint** `/user/me` and **method** `GET` in mockforme, which is being used in the `src/app/app.component.ts` file.

<hr />
✅ That’s it! Just add these few lines and `mockforme` will start mocking your APIs.

<br />

👉 Watch how to create mock API using mockforme in YouTube video:
[https://www.youtube.com/watch?v=V1_leclmpTw](https://www.youtube.com/watch?v=V1_leclmpTw)

### Tags
mockforme, angular mock api, angular api mocking, mock api angular, angular 19 mock api, angular api testing, mock api integration, angular frontend development, mock api example, angular cli mock api, angular 19 tutorial, angular api development, angular local server mock, angular testing utilities, frontend api mocking, api simulation angular, mock api tool angular, angular example project, mock api server angular, angular rapid prototyping
