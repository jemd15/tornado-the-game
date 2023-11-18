import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, NavbarComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.createLoginForm()
  }

  private createLoginForm() {
    return this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  public login() {

  }

}
