import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/model/marvel-model.dto';

@Component({
  selector: 'app-character-grid-card',
  templateUrl: './character-grid-card.component.html',
  styleUrls: ['./character-grid-card.component.scss']
})
export class CharacterGridCardComponent implements OnInit {

  @Input()
  character : Character;

  private DEFAULT_PARAGRAPH = "No Description available";

  constructor() { }

  ngOnInit(): void {
  }

  getCharacterThumbnailSrc() {
    return this.character.thumbnail.path + "." + this.character.thumbnail.extension;
  }

  getCharacterDescription() {
    return this.character.description ? this.character.description : this.DEFAULT_PARAGRAPH;
  }

}
