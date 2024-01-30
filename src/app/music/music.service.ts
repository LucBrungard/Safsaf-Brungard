import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../../models/Music';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  urlService: string = 'http://localhost:3000/musics';

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<Music[]> {
    return this.http.get<Music[]>(this.urlService);
  }

  findAllByTitle(title: string): Observable<Music[]> {
    return this.http.get<Music[]>(`${this.urlService}/title/${title}`);
  }

  findRandom(): Observable<Music> {
    return this.http.get<Music>(`${this.urlService}/random`);
  }

  findById(id: number): Observable<Music> {
    return this.http.get<Music>(`${this.urlService}/${id}`);
  }

  create(music: Music) {
    return this.http.post<Music>(`${this.urlService}`, music);
  }

  edit(music: Music): Observable<Music> {
    return this.http.put<Music>(`${this.urlService}/${music.id}`, music);
  }

  delete(id: number): Observable<Music[]> {
    return this.http.delete<Music[]>(`${this.urlService}/${id}`);
  }
}
