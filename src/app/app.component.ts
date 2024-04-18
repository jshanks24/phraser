import { Component, ViewChild } from '@angular/core';
import { KeyboardComponent } from './keyboard/keyboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(KeyboardComponent) keyboard!: KeyboardComponent;

  phrases = ['Hello World', 'My Awesome Phrase'];

  currentPhrase: any = [];

  showOverlay = true;

  lives = [1, 2, 3, 4, 5];

  overlayText = 'Start Game';
  overlayButtonText = 'Start';

  startGame() {
    this.currentPhrase = [];
    this.selectRandomPhrase();
    this.keyboard.reset();
    this.showOverlay = false;
  }

  selectRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    this.phrases[randomNumber].split('').forEach((letter) => {
      this.currentPhrase.push({
        value: letter,
        hidden: letter !== ' ' ? true : false,
        isSpace: letter === ' ',
      });
    });

    console.log(this.currentPhrase);
  }

  checkLetter(letter: string) {
    let letterFound = false;
    let hiddenLetters = false;

    this.currentPhrase.forEach((phraseLetter: any) => {
      if (phraseLetter.value.toLowerCase() === letter.toLowerCase()) {
        phraseLetter.hidden = false;
        letterFound = true;
      }

      if (phraseLetter.hidden) {
        hiddenLetters = true;
      }
    });

    if (!hiddenLetters) {
      this.showOverlay = true;
      this.overlayText = 'You Win';
      this.overlayButtonText = 'Play Again';
    }

    if (!letterFound) {
      this.lives.pop();

      if (this.lives.length === 0) {
        this.showOverlay = true;
        this.overlayText = 'You lost all of your lives';
        this.overlayButtonText = 'Try Again';
      }
    }
  }
}
