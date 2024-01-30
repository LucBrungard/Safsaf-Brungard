import { Component } from '@angular/core';
import { FormulaireComponent } from '../formulaire/formulaire.component';
import { MusicService } from '../music/music.service';
import { Music } from '../../models/Music';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-music',
  standalone: true,
  imports: [FormulaireComponent, RouterModule],
  templateUrl: './add-music.component.html',
  styleUrl: './add-music.component.scss',
  providers: [MusicService],
})
export class AddMusicComponent {
  constructor(
    private readonly musicService: MusicService,
    private readonly router: Router
  ) {}

  create(music: Music) {
    this.router.navigate(['/']);
  }
}
