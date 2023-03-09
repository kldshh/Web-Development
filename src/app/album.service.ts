import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAlbum, IAlbumPhotos} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<IAlbum[]> {
    return this.client.get<IAlbum[]>(`${this.BASE_URL}`)
  }


  getAlbum(id: Number): Observable<IAlbum> {
    return this.client.get<IAlbum>(`${this.BASE_URL}${id}`)
  }

  getAlbumPhoto(id: Number): Observable<IAlbumPhotos[]> {
    return this.client.get<IAlbumPhotos[]>(`${this.BASE_URL}${id}/photos`)
  }


  addAlbum(album: IAlbum): Observable<IAlbum> {
    return this.client.post<IAlbum>(`${this.BASE_URL}`, album);
  }


  deleteAlbum(id: number): Observable<IAlbum> {
    return this.client.delete<IAlbum>(`${this.BASE_URL}${id}`);
  }

  editAlbum(album: IAlbum): Observable<IAlbum> {
    return this.client.put<IAlbum>(`${this.BASE_URL}${album.id}`, album);
  }

}
