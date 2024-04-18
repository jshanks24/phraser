import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {
  keyboard = {
    rows: [
      [
        { value: 'q', disabled: false },
        { value: 'w', disabled: false },
        { value: 'e', disabled: false },
        { value: 'r', disabled: false },
        { value: 't', disabled: false },
        { value: 'y', disabled: false },
        { value: 'u', disabled: false },
        { value: 'i', disabled: false },
        { value: 'o', disabled: false },
        { value: 'p', disabled: false }
      ],
      [
        { value: 'a', disabled: false },
        { value: 's', disabled: false },
        { value: 'd', disabled: false },
        { value: 'f', disabled: false },
        { value: 'g', disabled: false },
        { value: 'h', disabled: false },
        { value: 'j', disabled: false },
        { value: 'k', disabled: false },
        { value: 'l', disabled: false },
      ],
      [
        { value: 'z', disabled: false },
        { value: 'x', disabled: false },
        { value: 'c', disabled: false },
        { value: 'v', disabled: false },
        { value: 'b', disabled: false },
        { value: 'n', disabled: false },
        { value: 'm', disabled: false },
      ],
    ],
  };

  @Output()
  letterClicked = new EventEmitter<string>();

  clickLetter(letter: any) {
    letter.disabled = true;
    this.letterClicked.emit(letter.value);
  }

  reset() {
    this.keyboard.rows.forEach((r) => r.forEach((k) => (k.disabled = false)));
  }
}
