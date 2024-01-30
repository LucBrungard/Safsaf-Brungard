import { Component, Input, OnInit } from '@angular/core';
import { MusicComponent } from '../music/music.component';
import { CommonModule } from '@angular/common';
import { Music } from '../../models/Music';
import { MatCommonModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { FormulaireComponent } from '../formulaire/formulaire.component';
import { MusicService } from '../music/music.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-list-music',
  standalone: true,
  imports: [
    MusicComponent,
    CommonModule,
    ListMusicComponent,
    MatTableModule,
    FormulaireComponent,
  ],
  templateUrl: './list-music.component.html',
  styleUrl: './list-music.component.scss',
})
export class ListMusicComponent implements OnInit {
  public listMusic: Music[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'album',
    'artist',
    'duration',
    'date',
    'styles' /*, 'picture'*/,
  ];
  selectedMusic: Music | undefined;

  constructor(private readonly musicService: MusicService) {
    //Rien à faire ici
  }

  ngOnInit(): void {
    this.musicService.findAll().subscribe((listMusic) => {
      this.listMusic = listMusic || [];
    });
  }
  view: string = 'card';

  switchView() {
    if (this.view === 'card') {
      this.view = 'table';
    } else {
      this.view = 'card';
    }
  }

  // onSubmitForm(formData: Music) {
  //   // Handle the form submission for adding or updating the music
  //   if (formData.id) {
  //     // Update existing music
  //     const index = this.listMusic.findIndex(
  //       (music) => music.id === formData.id
  //     );
  //     if (index !== -1) {
  //       this.listMusic[index] = formData;
  //     }
  //   } else {
  //     // Add new music
  //     formData.id = this.listMusic.length + 1;
  //     this.listMusic.push(formData);
  //   }
  // }

  setSelectedMusic(music: Music) {
    this.selectedMusic = music;
  }

  update(music: Music) {
    this.selectedMusic = music;
  }

  test(music: Music) {
    const existing = this.listMusic.find((value, index) => {
      return value.id === music.id;
    });

    if (!existing) return;

    this.listMusic[this.listMusic.indexOf(existing)] = music;
  }

  delete(music: Music) {
    this.musicService.delete(music.id!).subscribe((listMusic) => {
      this.listMusic = listMusic;
    });
  }
}
