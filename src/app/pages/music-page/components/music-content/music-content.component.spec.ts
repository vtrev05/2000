import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicContentComponent } from './music-content.component';

describe('MusicContentComponent', () => {
  let component: MusicContentComponent;
  let fixture: ComponentFixture<MusicContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
