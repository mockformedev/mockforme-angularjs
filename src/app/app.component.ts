import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mockforme angularjs';
  userData = {};

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
