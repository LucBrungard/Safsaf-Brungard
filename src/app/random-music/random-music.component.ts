import { Component } from '@angular/core';
import { MusicService } from '../music/music.service';
import { Music } from '../../models/Music';
import { MusicComponent } from '../music/music.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-random-music',
  standalone: true,
  imports: [MusicComponent, MatIconModule],
  templateUrl: './random-music.component.html',
  styleUrl: './random-music.component.scss',
  providers: [MusicService]
})
export class RandomMusicComponent {
  public music: Music | undefined;
  constructor(private readonly musicService: MusicService) {
    this.getRandom();
  }

  getRandom() {
    this.musicService.findRandom().subscribe(music => {
      this.music = music;
    });
  }
}
