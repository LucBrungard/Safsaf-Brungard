import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Music } from '../../models/Music';
import { MusicService } from '../music/music.service';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss',
  providers: [MusicService],
})
export class FormulaireComponent implements OnChanges {
  @Input() mode: 'creation' | 'edition';
  @Input() music: Music | undefined;
  @Output() submitForm$: EventEmitter<Music> = new EventEmitter<Music>();

  musicForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly musicService: MusicService
  ) {
    this.mode = 'creation';

    this.musicForm = this.fb.group({
      id: [null], // For edit mode
      title: ['', Validators.required],
      description: [''],
      album: ['', Validators.required],
      artist: ['', Validators.required],
      duration: ['', Validators.required],
      date: ['', Validators.required],
      styles: [[]],
      picture: [''],
    });
  }

  ngOnChanges(): void {
    // Handle changes to the input 'music' when editing
    if (this.music) {
      this.musicForm.patchValue(this.music);
    }
  }

  onSubmit() {
    if (!this.musicForm.valid) return;

    const formData = this.musicForm.value as Music;

    if (this.mode === 'creation') {
      this.musicService.create(formData).subscribe((music) => {
        this.submitForm$.emit(music);
      });
    } else {
      this.musicService.edit(formData).subscribe((musics) => {
        this.submitForm$.emit(musics);
      });
    }

    this.musicForm.reset();
  }
}
