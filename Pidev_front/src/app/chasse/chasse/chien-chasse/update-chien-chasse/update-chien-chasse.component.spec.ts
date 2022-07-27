import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChienChasseComponent } from './update-chien-chasse.component';

describe('UpdateChienChasseComponent', () => {
  let component: UpdateChienChasseComponent;
  let fixture: ComponentFixture<UpdateChienChasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChienChasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChienChasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
