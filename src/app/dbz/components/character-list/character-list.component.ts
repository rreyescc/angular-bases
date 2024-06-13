import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from './character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  public deleteCharacter(id: string) {
    this.onDeleteCharacter.emit(id);
  }

}
