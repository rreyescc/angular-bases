import { Component } from "@angular/core";
import { Character } from '../components/character-list/character.interface';
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public title: string = "App DBZ";

  constructor(
    private dbzService: DbzService
  ){}

  get characters(): Character[] {
    return this.dbzService.characterList;
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  onAddCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }

}
