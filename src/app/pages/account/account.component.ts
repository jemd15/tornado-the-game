import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  public privateQuizzes: number = Math.floor(Math.random() * 10)
  public publicQuizzes: number = Math.floor(Math.random() * 10)
  public totalQuizzes: number = this.privateQuizzes + this.publicQuizzes
  public quizzes: any = [1,2,3,4,5,6,7,8,9,10]

}
