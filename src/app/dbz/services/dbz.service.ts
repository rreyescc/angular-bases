import { Injectable } from '@angular/core';
import { Character } from '../components/character-list/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characterList: Character[] = [];

  onNewCharacter(character: Character): void {
    this.characterList.push({ ...character });
  }

  onDeleteCharacter(id: string) {
    this.characterList = this.characterList.filter( character => character.id !== id);
  }

}
