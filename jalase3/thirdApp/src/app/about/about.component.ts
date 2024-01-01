import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = "about component"
  color = "red"
  flag = true
  hide: boolean = false
  name = 'reza gholamalitabar'
  email = 'reza@gmail.com'
  age = 22

  show() : void{
    this.hide = !this.hide
  }
}
