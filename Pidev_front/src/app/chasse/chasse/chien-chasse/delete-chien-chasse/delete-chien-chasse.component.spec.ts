import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChienChasseComponent } from './delete-chien-chasse.component';

describe('DeleteChienChasseComponent', () => {
  let component: DeleteChienChasseComponent;
  let fixture: ComponentFixture<DeleteChienChasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteChienChasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChienChasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
