import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,// require ng module
  imports: [CommonModule, RouterOutlet, CustomerComponent, AboutComponent], // dependency
  // template: `<h1> hello world</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Reza Gholamalitabar Programming CV';
  title = "first app"
  name = "hasan hasani"
  age = 22
}
