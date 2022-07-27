import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommentaireComponent } from './detail-commentaire.component';

describe('DetailCommentaireComponent', () => {
  let component: DetailCommentaireComponent;
  let fixture: ComponentFixture<DetailCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
