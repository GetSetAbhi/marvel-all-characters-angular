export interface CharacterDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: CharacterDataContainer;
    etag: string;
  }
  
  export interface CharacterDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  }
  
  export interface Character {
    id: number;
    name: string;
    description: string;
    resourceURI: string;
    urls: Url[];
    thumbnail: Image;
  }
  
  export interface Url {
    type: string;
    url: string;
  }
  
  export interface Image {
    path: string;
    extension: string;
  }