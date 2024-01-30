import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMusicComponent } from './random-music.component';

describe('RandomMusicComponent', () => {
  let component: RandomMusicComponent;
  let fixture: ComponentFixture<RandomMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
