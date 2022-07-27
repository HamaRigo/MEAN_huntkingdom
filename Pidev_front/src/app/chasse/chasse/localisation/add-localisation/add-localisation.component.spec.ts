import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocalisationComponent } from './add-localisation.component';

describe('AddLocalisationComponent', () => {
  let component: AddLocalisationComponent;
  let fixture: ComponentFixture<AddLocalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLocalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
