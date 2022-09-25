import { Component, Input, OnInit } from '@angular/core';
import { CharacterDataContainer } from '../model/marvel-model.dto';
import { PaginationData } from '../model/pagination.dto';
import { MarvelService } from '../services/marvel.service';
import { PaginationService } from '../services/pagination.service';


@Component({
  selector: 'app-character-grid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.scss']
})
export class CharacterGridComponent implements OnInit {

  characterData : CharacterDataContainer;

  paginationData : PaginationData;

  constructor(private marvelService: MarvelService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.populatePageWithCharacterData();
  }

  populatePageWithCharacterData(index? : number) {
    let offset = this.paginationService.calculateOffset(index);
    this.marvelService.getAllCharacters(offset).subscribe((response) => {
      if (response.data) {
        this.characterData = response.data;
        this.paginationService.setCharacterData(this.characterData);
        this.paginationData = this.paginationService.createPaginationData();
      }
    });
  }

}
