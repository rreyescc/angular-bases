import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../character-list/character.interface";
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html'
})
export class CharacterFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  @Input()
  public character: Character = { id: '', name: '', power: 0 };

  emitCharacter() {
    this.onNewCharacter.emit({ ...this.character , id: uuid() });
    this.character.name = "";
    this.character.power = 0;
  }

}
