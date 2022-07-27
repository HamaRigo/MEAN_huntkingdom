import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrucAstuceComponent } from './add-truc-astuce.component';

describe('AddTrucAstuceComponent', () => {
  let component: AddTrucAstuceComponent;
  let fixture: ComponentFixture<AddTrucAstuceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrucAstuceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrucAstuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
