import { Routes } from '@angular/router';
import { ListMusicComponent } from './list-music/list-music.component';
import { RandomMusicComponent } from './random-music/random-music.component';
import { AddMusicComponent } from './add-music/add-music.component';

export const routes: Routes = [
  {path: '', component: ListMusicComponent},
  {path: 'random', component: RandomMusicComponent},
  {path: 'add', component: AddMusicComponent}
];
