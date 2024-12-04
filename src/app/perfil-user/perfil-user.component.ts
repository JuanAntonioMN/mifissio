import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-perfil-user',
  standalone: true,
  imports:[RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './perfil-user.component.html',
  styleUrl: './perfil-user.component.css'
})
export class PerfilUserComponent {

}
