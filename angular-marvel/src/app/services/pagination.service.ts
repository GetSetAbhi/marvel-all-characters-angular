import { Injectable } from '@angular/core';
import { PaginationData } from '../model/pagination.dto';
import * as PageConstants from '../model/page-constants';
import { CharacterDataContainer } from '../model/marvel-model.dto';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private characterData : CharacterDataContainer;

  constructor() { }

  createPaginationData() {
    let paginationData : PaginationData = {
      currentPage: this.currentPageIndex(),
      offset: this.characterData.offset,
      limit: PageConstants.CHARACTERS_PER_PAGE,
      totalResults: this.characterData.total,
      totalPages: this.totalPages()
    }
    return paginationData;
  }

  calculateOffset(index : number) {
    if (index) {
      return PageConstants.CHARACTERS_PER_PAGE * (index - 1);
    }
    return 0;
  }

  currentPageIndex() {
    let currentPageIndex = (this.characterData.offset / PageConstants.CHARACTERS_PER_PAGE) + 1;
    return currentPageIndex; 
  }

  totalPages() {
    let pages = Math.ceil(this.characterData.total / PageConstants.CHARACTERS_PER_PAGE);
    return pages;
  }

  setCharacterData(data) {
    this.characterData = data;
  }
}
