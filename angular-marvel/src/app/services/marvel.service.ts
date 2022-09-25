import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterDataWrapper } from '../model/marvel-model.dto';
import * as PageConstants from '../model/page-constants';

@Injectable({
    providedIn: 'root',
})
export class MarvelService {
    rootUrl = 'https://gateway.marvel.com:443/v1/public';

    constructor(private http: HttpClient) { }

    public getAllCharacters(offset? : number) {
        let url = this.rootUrl + '/characters';
        if (offset) {
            url = url + '?limit=' + PageConstants.CHARACTERS_PER_PAGE + '&offset=' + offset;
        }
        return this.http.get<CharacterDataWrapper>(url);
    }
}