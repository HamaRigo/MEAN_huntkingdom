import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocalisationComponent } from './update-localisation.component';

describe('UpdateLocalisationComponent', () => {
  let component: UpdateLocalisationComponent;
  let fixture: ComponentFixture<UpdateLocalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLocalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
