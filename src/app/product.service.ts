import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  _ulbumUrl:string ="../assets/album.json";

  constructor(private _http:Http) { }

  getAlbum(id:number){
    return this._http.get(this._ulbumUrl)
    .map((response)=>response.json());

  }

}
