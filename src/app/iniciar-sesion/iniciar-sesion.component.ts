
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApimifissioService } from '../services/apimifissio.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApimifissioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;

    this.apiService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login exitoso', response);
        // Redirigir al usuario a otra página si el login es exitoso
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error en el inicio de sesión', error);
        this.errorMessage = 'Credenciales inválidas o problema con el servidor.';
      },
    });
  }
}
