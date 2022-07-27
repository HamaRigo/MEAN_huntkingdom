import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGibierComponent } from './add-gibier.component';

describe('AddGibierComponent', () => {
  let component: AddGibierComponent;
  let fixture: ComponentFixture<AddGibierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGibierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGibierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
