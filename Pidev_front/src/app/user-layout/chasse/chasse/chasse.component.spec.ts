import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasseComponent } from './chasse.component';

describe('ChasseComponent', () => {
  let component: ChasseComponent;
  let fixture: ComponentFixture<ChasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
