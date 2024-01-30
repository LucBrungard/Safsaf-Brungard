import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { ListMusicComponent } from './list-music/list-music.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListMusicComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Safsaf-Brungard';
}
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
