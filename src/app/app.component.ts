import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './shared/components/login/login.component'
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent ,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuildPlannerFrontend';
}
