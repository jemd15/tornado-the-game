import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from '../../components/question-card/question-card.component';

@Component({
  selector: 'app-playing-game',
  standalone: true,
  imports: [CommonModule, QuestionCardComponent],
  templateUrl: './playing-game.component.html',
  styleUrl: './playing-game.component.css'
})
export class PlayingGameComponent {

  public cards: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];


}
