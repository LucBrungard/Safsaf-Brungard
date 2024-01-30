import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Music } from '../../models/Music';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
})
export class MusicComponent {
  @Input() music: Music | undefined;

  @Output('deleted') delete$: EventEmitter<Music> = new EventEmitter();
  @Output('updated') update$: EventEmitter<Music> = new EventEmitter();

  update() {
    this.update$.emit(this.music);
  }

  delete() {
    this.delete$.emit(this.music);
  }
}
