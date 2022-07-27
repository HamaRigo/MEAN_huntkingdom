import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChienChasseComponent } from './add-chien-chasse.component';

describe('AddChienChasseComponent', () => {
  let component: AddChienChasseComponent;
  let fixture: ComponentFixture<AddChienChasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChienChasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChienChasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
