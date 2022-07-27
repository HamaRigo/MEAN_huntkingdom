import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChienChasseComponent } from './detail-chien-chasse.component';

describe('DetailChienChasseComponent', () => {
  let component: DetailChienChasseComponent;
  let fixture: ComponentFixture<DetailChienChasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChienChasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChienChasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
