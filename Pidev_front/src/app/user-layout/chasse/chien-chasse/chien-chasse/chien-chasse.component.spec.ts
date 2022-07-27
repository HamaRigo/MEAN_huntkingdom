import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienChasseComponent } from './chien-chasse.component';

describe('ChienChasseComponent', () => {
  let component: ChienChasseComponent;
  let fixture: ComponentFixture<ChienChasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChienChasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChienChasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
